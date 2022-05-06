import { PrismaClient } from '@prisma/client'
import { gql } from 'graphql-tag'
import { writeFileSync } from 'fs';
import fileSchema from './file'
import { nanoid } from 'nanoid';

export default (prisma: PrismaClient) => {
    
    
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

        createDirectory(path: String!, name: String!): File!
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
                parts = parts.slice(1, parts.length);
    
                let pathQuery : any = {};
                if(parts.length > 0){

                }
                return await prisma.file.findMany({
                    where: {
                       organisation: context?.jwt?.organisation
                    }
                });
               
            },
        },
        Mutation: {
            uploadFiles: async (parent: any, args: any, context: any) => {

                const { path } = args;

                
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

                    await prisma.file.create({
                        data: {
                            id: nanoid(),
                            name: filename,
                            size: fileData.byteLength,
                            directory: false,
                            organisation: context?.jwt?.organisation
                        }
                    })
    
                    writeFileSync(filename, fileData)
                    return {data: fileData, filename}
                }))
    
            },
            createDirectory: async (parent: any, args: {name: string, path: string}, context: any) => {

                const {name, path} = args;

                const file = await prisma.file.create({
                    data: {
                        id: nanoid(),
                        name: name,
                        directory: true,
                        size: 1,
                        organisation: context?.jwt?.organisation
                    }
                })
     
                return file;
            }
        }
    }

    return {
        typeDefs,
        resolvers
    }
}