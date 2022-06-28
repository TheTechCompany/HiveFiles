import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import jwt from 'jsonwebtoken'
import { PersistenceEngine } from "../../persistence";

export default (prisma: PrismaClient, persistence: PersistenceEngine) => {

    const getIDForPath = async (path: string, organisation: string) => {
        const parts = path.split('/').slice(1)?.filter((a) => a.length > 0)

        console.log("GETID", {parts})

       const data = await prisma.$queryRaw<any[]>`WITH RECURSIVE cte(id, name, parentId, directory, size, pathZ, depth) AS (
            SELECT id, name, "parentId", directory, size, ARRAY[name], 1
                FROM "File" 
            WHERE "parentId" is null 
            AND name = (string_to_array(${parts.join(',')}, ','))[1]
            AND organisation = ${organisation}
            
            UNION ALL
            
            SELECT a.id, a.name, a."parentId", a.directory, a.size, pathZ || a.name, depth + 1
                FROM "File" as a 
                JOIN cte ON cte."id" = a."parentId"
            WHERE a.organisation = ${organisation} AND
            (
                a.name=(string_to_array(${parts.join(',')}, ','))[depth + 1]
            )
        )
        SELECT *, array_to_string(pathZ, '/')
        FROM cte
        WHERE depth = ${parts.length}
        `

        console.log("GetID", {data})
        return data?.[0]

    }

    const router = Router();

    //Request to /api/v1/files/explore/*
    // /* is treated as file path e.g. /Folder/file.txt
    router.get('/explore/*', async (req, res) => {
        let path = req.path.replace('/explore', '');

        const {id} = await getIDForPath(path, '');

        console.log({id})
        // console.log(path);
    })

    //Request to /api/v1/files/:id/:name 
    //Get file by id and let name be used as wildcard to fix office formats
    router.get('/:id/:name', async (req, res) => {
        console.log(req);

        const { authToken } = req.query;

        if(!authToken) return res.send({error: "No auth token provided"});

        const { organisation, file: fileId, issuer } = jwt.verify(`${authToken}`, process.env.JWT_SECRET || 'test') as any;

        const file = await prisma.file.findFirst({
            where: {
                id: req.params.id,
                organisation: organisation
            }
        })

        if(!file?.id) return res.send({error: "Couldn't find file"});
        const resp = await persistence.getObject(file?.id)
        res.send(resp.Body)
    })

    return router;
}