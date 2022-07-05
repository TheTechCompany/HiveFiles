import { PrismaClient } from "@prisma/client";
import { PersistenceEngine } from "../persistence";

export const getCypherQueryForPath = (path: string) => {
    let parts = path.split('/').slice(1).filter((a) => a.length > 0);

    let query = parts.map((path_part, ix) => {
        return `({name: $path_parts[${ix}]})`
    }).join(`-[:HAS_FILE]->`)

    return {
        query: query.length > 0 ? `-[:HAS_FILE]->${query}` : '',
        path: parts
    }
}


    
export const getIDForPath = async (prisma: PrismaClient, path: string, organisation: string) : Promise<{ id: string, name: string, parentId: string, directory: boolean, size: number}> => {
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

export const getLastPointInPath = async (prisma: PrismaClient, path: string, organisation: string) => {
    const parts = path.split('/').slice(1).filter((a) => a.length > 0)

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
     `

     return {
         ...data?.[data?.length - 1],
         steps: parts.length - data?.length
     }
}

export const deleteFolder = async (prisma: PrismaClient, persistence: PersistenceEngine, path: string, organisation: string) => {
    const files = await listPath(prisma, path, organisation)
    const { id: folderId } = await getIDForPath(prisma, path, organisation);

    // const folderId = files?.[0]?.parentId;

    for(var i = 0; i < files.length; i++){
        let file = files[i];

        if(file.directory){
            await deleteFolder(prisma, persistence, `${path}/${file.name}`, organisation)
        }else{
            await persistence.deleteObject(file.id)
            await prisma.file.delete({where: {id: file.id}})
        }
    }
    return await prisma.file.delete({where: {id: folderId}})
}

export const listPath = async (prisma: PrismaClient, path: string, organisation: string) => {
    let parts = path.split('/')
    parts = parts.slice(1, parts.length).filter((a) => a.length > 0);

    console.log({parts, path: path})

    if(parts.length == 0){
        const data = await prisma.$queryRaw<any[]>`
            SELECT id, name, "parentId", directory, size, organisation, "uploadedBy" FROM "File" 
                WHERE "parentId" is null AND organisation=${organisation}
        `
        return data?.map((x) => ({
            ...x,
            organisation: {id: x.organisation},
            uploadedBy: x.uploadedBy ? {id: x.uploadedBy} : undefined
        }));

    }else{

        const data = await prisma.$queryRaw<any[]>`
            WITH RECURSIVE cte(id, name, parentId, directory, size, organisation, uploadedBy, pathZ, depth) AS (
                SELECT id, name, "parentId", directory, size, organisation, "uploadedBy", ARRAY[name], 1
                    FROM "File" 
                WHERE "parentId" is null 
                    AND name = (string_to_array(${parts.join(',')}, ','))[1]
                    AND organisation = ${organisation}
                
                UNION ALL
                
                SELECT a.id, a.name, a."parentId", a.directory, a.size, a.organisation, a."uploadedBy", pathZ || a.name, depth + 1
                    FROM "File" as a 
                JOIN cte ON cte."id" = a."parentId" AND (depth + 1 = ${parts.length + 1} OR a.name = (string_to_array(${parts.join(',')}, ','))[depth + 1])
            )
            SELECT *, array_to_string(pathZ, '/')
            FROM cte
            WHERE depth = ${parts.length + 1}
        `

        return data;
    }
}