import { PrismaClient } from '@prisma/client'
import { gql } from 'graphql-tag'
import { writeFileSync } from 'fs';
import fileSchema from './file'
import { nanoid } from 'nanoid';
import e from 'express';


export default (prisma: PrismaClient) => {
    
    
    const getIDForPath = async (path: string, organisation: string) => {
        const parts = path.split('/').slice(1)

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
            WHERE organisation = ${organisation} AND
            (
                a.name=(string_to_array(${parts.join(',')}, ','))[depth + 1]
            )
        )
        SELECT *, array_to_string(pathZ, '/')
        FROM cte
        WHERE depth = ${parts.length}
        `

        return data?.[0]

    }

    const getLastPointInPath = async (path: string, organisation: string) => {
        const parts = path.split('/').slice(1)

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
             WHERE organisation = ${organisation} AND
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

        deleteFile(path: String!): String!

        renameFile(path: String!, newName: String!): String!
        moveFile(path: String!, newPath: String!): String!
        copyFile(path: String!, newPath: String!): String!

        createDirectory(path: String!, recursive: Boolean): File!
    }
   
    ${fileSchema}
    `

    const resolvers = {
        Query : {
            filesById: async (root: any, args: {ids: string[]}) => {
                return await prisma.file.findMany({where: {id: {in: args.ids}}})
            },
            files: async (parent: any, args: {path: string}, context: any) => {
                let parts = args.path.split('/')
                parts = parts.slice(1, parts.length).filter((a) => a.length > 0);

                console.log({parts, path: args.path})

                if(parts.length == 0){
                    const data = await prisma.$queryRaw`
                        SELECT id, name, "parentId", directory FROM "File" 
                            WHERE "parentId" is null AND organisation=${context?.jwt?.organisation}
                    `
                    return data;
                }else{

                const data = await prisma.$queryRaw`
                    WITH RECURSIVE cte(id, name, parentId, directory, size, pathZ, depth) AS (
                        SELECT id, name, "parentId", directory, size, ARRAY[name], 1
                            FROM "File" 
                        WHERE "parentId" is null 
                        AND name = (string_to_array(${parts.join(',')}, ','))[1]
                        AND organisation = ${context?.jwt?.organisation}
                        
                        UNION ALL
                        
                        SELECT a.id, a.name, a."parentId", a.directory, a.size, pathZ || a.name, depth + 1
                            FROM "File" as a 
                            JOIN cte ON cte."id" = a."parentId"
                        WHERE organisation = ${context?.jwt?.organisation} AND
                        (
                            a.name=(string_to_array(${parts.join(',')}, ','))[depth + 1]
                            OR 
                            (
                                a."parentId" = cte."id" 
                                  
                            ) 
                        )
                    )
                    SELECT *, array_to_string(pathZ, '/')
                    FROM cte
                    WHERE depth = ${parts.length + 1}
                `

                console.log({data})
                return data

                }
               
            },
        },
        Mutation: {
            uploadFiles: async (parent: any, args: any, context: any) => {

                const { path } = args;

                
                const { id: parentId } = await getIDForPath(path, context?.jwt?.organisation);

                const files = await Promise.all(args.files.map(async (file: any) => {
                    const { createReadStream, filename } = await file;
                    
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

                    if(!parentId){
                        await prisma.$executeRaw`
                            INSERT INTO "File" 
                                (id, name, size, directory, organisation)
                            VALUES 
                                (${nanoid()}, ${filename}, ${fileData.byteLength}, false, ${context?.jwt?.organisation})
                        `;

                    }else{
                        await prisma.$executeRaw`
                            INSERT INTO "File"
                                (id, name, size, directory, organisation, "parentId")
                            VALUES
                                (${nanoid()}, ${filename}, ${fileData.byteLength}, false, ${context?.jwt?.organisation}, ${parentId})
                        `
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
                    return {data: fileData, filename}
                }))
    
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

                console.log({parentId, path, startDir, steps});

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
                            // const file = await prisma.$executeRaw`
                            //     INSERT INTO "File" 
                            //         (id, name, size, directory, organisation)
                            //     VALUES
                            //         (${nanoid()}, ${name}, 1, true, ${context?.jwt?.organisation})
                            // `

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
                                    parentId: subId
                                }
                            })
                            // const file = await prisma.$executeRaw`
                            // INSERT INTO "File" 
                            //     (id, name, size, directory, organisation, "parentId")
                            // VALUES
                            //     (${nanoid()}, ${name}, 1, true, ${context?.jwt?.organisation}, ${subId})
                            // `
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
                                organisation: context?.jwt?.organisation
                            }
                        })
                        // const file = await prisma.$executeRaw`
                        //     INSERT INTO "File" 
                        //         (id, name, size, directory, organisation)
                        //     VALUES
                        //         (${nanoid()}, ${name}, 1, true, ${context?.jwt?.organisation})
                        // `
                        return file
                    }else{
                        const file = await prisma.file.create({
                            data: {
                                id: nanoid(),
                                name: name || '',
                                size: 1,
                                directory: true,
                                organisation: context?.jwt?.organisation,
                                parentId: parentId
                            }
                        })
                        // const file = await prisma.$executeRaw`
                        // INSERT INTO "File" 
                        //     (id, name, size, directory, organisation, "parentId")
                        // VALUES
                        //     (${nanoid()}, ${name}, 1, true, ${context?.jwt?.organisation}, ${parentId})
                        // `
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