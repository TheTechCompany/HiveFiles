import { PrismaClient } from '@prisma/client'
import { gql } from 'graphql-tag'
import { writeFileSync } from 'fs';
import fileSchema from './file'
import { nanoid } from 'nanoid';
import e from 'express';
import { PersistenceEngine } from '../persistence';
import mime from 'mime';
import jwt from 'jsonwebtoken';

export default (prisma: PrismaClient, persistence: PersistenceEngine) => {
    
    
    const getIDForPath = async (path: string, organisation: string) : Promise<{ id: string, name: string, parentId: string, directory: boolean, size: number}> => {
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

    const getLastPointInPath = async (path: string, organisation: string) => {
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


    const typeDefs = `

    type Query {
        filesById(ids: [ID]): [File] @merge(keyField: "id", keyArg: "ids")
        files(path: String!): [File]!
    }

    type Mutation {
        
        uploadFiles(path: String, files: [Upload]): [File]

        deleteFile(path: String!): File!

        renameFile(path: String!, newName: String!): File!
        moveFile(path: String!, newPath: String!): File!
        copyFile(path: String!, newPath: String!): File!

        createDirectory(path: String!, recursive: Boolean): File!
    }
   
    ${fileSchema}
    `

    const resolvers = {
        File: {
            url: async (root: any, args: any, context: any) => {
                if(!root.directory){
                    const token = jwt.sign({
                        file: root.id,
                        issuer: context.jwt.id,
                        organisation: context.jwt.organisation
                    }, 
                    process.env.JWT_SECRET || 'test', 
                    {expiresIn: 60 * 60 * 24});

                    return `${process.env.EXTERNAL_URL}/api/v1/files/${root.id}/${root.name}?authToken=${token}`
                    // return await persistence.readObject(root.id);
                }else{
                    //TODO return link to directory in hive files
                }
            }
        },
        Query : {
            filesById: async (root: any, args: {ids: string[]}) => {
                const files = await prisma.file.findMany({where: {id: {in: args.ids}}})
                return files.map((x) => ({
                    ...x,
                    organisation: {id: x.organisation},
                    uploadedBy: x.uploadedBy ? {id: x.uploadedBy} : undefined
                }))
            },
            files: async (parent: any, args: {path: string}, context: any) => {
                let parts = args.path.split('/')
                parts = parts.slice(1, parts.length).filter((a) => a.length > 0);

                console.log({parts, path: args.path})

                if(parts.length == 0){
                    const data = await prisma.$queryRaw<any[]>`
                        SELECT id, name, "parentId", directory, size, organisation, "uploadedBy" FROM "File" 
                            WHERE "parentId" is null AND organisation=${context?.jwt?.organisation}
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
                            AND organisation = ${context?.jwt?.organisation}
                        
                        UNION ALL
                        
                        SELECT a.id, a.name, a."parentId", a.directory, a.size, a.organisation, a."uploadedBy", pathZ || a.name, depth + 1
                            FROM "File" as a 
                        JOIN cte ON cte."id" = a."parentId" AND (depth + 1 = ${parts.length + 1} OR a.name = (string_to_array(${parts.join(',')}, ','))[depth + 1])
                    )
                    SELECT *, array_to_string(pathZ, '/')
                    FROM cte
                    WHERE depth = ${parts.length + 1}
                `
                // WHERE depth = ${parts.length + 1}

                console.log({data})
                return data?.map((x) => ({
                    ...x,
                    organisation: {id: x.organisation},
                    uploadedBy: x.uploadedBy ? {id: x.uploadedBy} : undefined
                }))

                }
               
            },
        },
        Mutation: {
            renameFile: async (parent: any, args: {path: string, newName: string}, context: any) => {
                const { path, newName } = args;

                const { id } = await getIDForPath(path, context?.jwt?.organisation) || {};

                if(!id) return new Error("File does not exist");

                return await prisma.file.update({
                    where: {id},
                    data: {
                        name: newName
                    }
                })
            },
            moveFile: async (parent: any, args: {path: string, newPath: string}, context: any) => {
                const { path, newPath } = args;

                const { id } = await getIDForPath(path, context?.jwt?.organisation) || {};
                
                const { id: newId } = await getIDForPath(newPath, context?.jwt?.organisation) || {};

                if(!newId) return new Error("New path does not exist");

                return await prisma.file.update({
                    where: {id},
                    data: {
                        parentId: newId
                    }
                })

            },
            deleteFile: async (parent: any, args: {path: string}, context: any) => {
                const { path } = args;

                const { id, directory } = await getIDForPath(path, context?.jwt?.organisation) || {};
                
                if(id){

                    if(directory){
                        //TODO delete recursive

                        return await prisma.file.delete({where: {id}})
                        
                    }else{
                        await persistence.deleteObject(id)

                        return await prisma.file.delete({where: {id}});    
                    }
                }else{
                    return new Error("No file found");
                }
            },
            uploadFiles: async (parent: any, args: any, context: any) => {

                const { path } = args;

                console.log("Upload files", {path, files: args.files})

                const { id: parentId } = await getIDForPath(path, context?.jwt?.organisation) || {};

                const { id: startDir, steps } = (await getLastPointInPath(path, context?.jwt?.organisation)) || {}

                let results : {id: string}[] = [];

                console.log("Parent Start", {parentId, startDir, steps})

                if(!parentId){
                    let parts = path.split('/').slice(1).filter((a: string) => a.length > 0)
                    let name;

                    if(parts.length > 0){
                        // name = parts[parts.length - 1]
                        parts = parts.slice(0)
                    }

                    try{
                        let start_ix = parts.length - steps;

                        for(var ix = start_ix; ix < parts.length; ix++){

                    
                        // results = await Promise.all(parts.slice(parts.length - steps, parts.length).map(async (part: string, ix: number) => {
                            let part_path = parts.slice(0, start_ix + ix).join('/')
                            name = parts[start_ix + ix]

                            console.log({ix: start_ix + ix, part_path})

                            const { id: subId } = await getIDForPath(`/${part_path}`, context?.jwt?.organisation) || {};

                            console.log({subId})

                            if(!subId){
                                //This might fall through if last point is not parentId

                                const folder = await prisma.file.create({
                                    data: {
                                        id: nanoid(),
                                        name,
                                        size: 1,
                                        directory: true,
                                        uploadedBy: context?.jwt?.id,
                                        organisation: context?.jwt?.organisation
                                    }
                                })
                                results.push(folder)
                    
                            }else{

                                const folder =  await prisma.file.create({
                                    data: {
                                        id: nanoid(),
                                        name,
                                        size: 1,
                                        directory: true,
                                        organisation: context?.jwt?.organisation,
                                        uploadedBy: context?.jwt?.id,
                                        parentId: subId
                                    }
                                })
                                results.push(folder)
                            }
                        }
                        // }))
                    }catch(e){
                        console.error(e)
                    }
                }

                
                console.log("Writing", {parentId: parentId || results?.[results?.length - 1]?.id, path})

                const files = await Promise.all(args.files?.map(async (file: any) => {
                    const { createReadStream, filename } = await file;
                    
                    const mimeType = mime.getType(filename);

                    const fileData = await new Promise<Buffer>((resolve, reject) => {
                        const readStream = createReadStream();
                        const buffers: Buffer[] = [];

                        readStream.on('error', reject)
            
                        readStream.on('data', (data: Buffer) => {
                            buffers.push(data)
                        })
            
                        readStream.on('end', () => {
                            resolve(Buffer.concat(buffers))
                        })
                    })

                    const fileId = nanoid();

                    await persistence.writeObject(fileId, fileData)

                    console.log({context: context?.jwt, fileId})

                    if(!parentId && results.length == 0){
                        return await prisma.file.create({
                            data: {
                                id: fileId,
                                name: filename,
                                size: fileData.byteLength,
                                mimeType: mimeType || 'application/octet-stream',
                                directory: false,
                                uploadedBy: context?.jwt?.id,
                                organisation: context?.jwt?.organisation
                            }
                        })
                        // await prisma.$executeRaw`
                        //     INSERT INTO "File" 
                        //         (id, name, size, directory, organisation)
                        //     VALUES 
                        //         (${nanoid()}, ${filename}, ${fileData.byteLength}, false, ${context?.jwt?.organisation})
                        // `;

                    }else{

                        return await prisma.file.create({
                            data: {
                                id: fileId,
                                name: filename,
                                size: fileData.byteLength,
                                directory: false,
                                mimeType: mimeType || 'application/octet-stream',
                                organisation: context?.jwt?.organisation,
                                uploadedBy: context?.jwt?.id,
                                parentId: parentId || results[results.length - 1].id,
                            }
                        })
                        // await prisma.$executeRaw`
                        //     INSERT INTO "File"
                        //         (id, name, size, directory, organisation, "parentId")
                        //     VALUES
                        //         (${nanoid()}, ${filename}, ${fileData.byteLength}, false, ${context?.jwt?.organisation}, ${parentId})
                        // `
                    }
                    // create({
                    //     data: {
                    //         id: nanoid(),
                    //         name: filename,
                    //         size: fileData.byteLength,
                    //         directory: false,
                    //         organisation: context?.jwt?.organisation
                    //     }
                    // })
                    // writeFileSync(filename, fileData)
                    
                    // return {data: fileData, name:  filename}
                }))
                return files;
            },
            createDirectory: async (parent: any, args: {name: string, path: string, recursive: boolean}, context: any) => {

                const {path} = args;

                let name; // path.split('/')

                let parts = path.split('/').slice(1).filter((a) => a.length > 0)

                if(parts.length > 0){
                    name = parts[parts.length - 1]
                    parts = parts.slice(0)
                }

                const { id: startDir, steps } = (await getLastPointInPath(path, context?.jwt?.organisation)) || {}
                const {id: parentId} = (await getIDForPath(path, context?.jwt?.organisation)) || {}


                if(args.recursive){
                    let results = [];
                    for(var i = parts.length - steps; i < parts.length; i++){
                        let part_path = parts.slice(0, i).join('/')
                        name = parts[i]

                        const { id: subId } = await getIDForPath(`/${part_path}`, context?.jwt?.organisation) || {};

                        if(!subId){
                            //This might fall through if last point is not parentId
    
                            const file = await prisma.file.create({
                                data: {
                                    id: nanoid(),
                                    name,
                                    size: 1,
                                    directory: true,
                                    organisation: context?.jwt?.organisation
                                }
                            })
                      

                            results.push(file)
                            // return file
                        }else{

                            const file = await prisma.file.create({
                                data: {
                                    id: nanoid(),
                                    name,
                                    size: 1,
                                    directory: true,
                                    organisation: context?.jwt?.organisation,
                                    uploadedBy: context?.jwt?.id,
                                    parentId: subId
                                }
                            })
                       
                            results.push(file)
                        }
                    }

                    return results?.[results?.length - 1]

                }else{

                    if(!parentId && !startDir){
                        //This might fall through if last point is not parentId

                        const file = await prisma.file.create({
                            data: {
                                id: nanoid(),
                                name: name ||'',
                                size: 1,
                                directory: true,
                                uploadedBy: context?.jwt?.id,
                                organisation: context?.jwt?.organisation
                            }
                        })
                       
                        return file
                    }else{
                        const file = await prisma.file.create({
                            data: {
                                id: nanoid(),
                                name: name || '',
                                size: 1,
                                directory: true,
                                uploadedBy: context?.jwt?.id,
                                organisation: context?.jwt?.organisation,
                                parentId: parentId
                            }
                        })
                
                        return file
                    }
                }
             
            }
        }
    }

    return {
        typeDefs,
        resolvers
    }
}