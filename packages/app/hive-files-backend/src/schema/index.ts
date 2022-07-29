import { PrismaClient } from '@prisma/client'
import { gql } from 'graphql-tag'
import { writeFileSync } from 'fs';
import fileSchema from './file'
import formSchema from './form'

import { nanoid } from 'nanoid';
import e from 'express';
import { PersistenceEngine } from '../persistence';
import mime from 'mime';
import jwt from 'jsonwebtoken';
import { deleteFolder, getIDForPath, getLastPointInPath, listPath } from '../utils';

export default (prisma: PrismaClient, persistence: PersistenceEngine) => {
    


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

        commentOnFile(id: ID, comment: String): File
        deleteCommentOnFile(id: ID, comment: ID): File

        createDirectory(path: String!, recursive: Boolean): File!
    }
   
    ${fileSchema}
    ${formSchema}
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
            },
            comments: async (root: any, args: any, context: any) => {
                const comments = await prisma.fileComment.findMany({
                    where: {
                        fileId: root.id
                    }
                })
                return comments.map((x) => ({
                    ...x,
                    postedBy: {id: x.postedBy}
                }))
            }
        },
        Query : {
            forms: async (root: any, args: any, context: any) => {
                let query : any = {};
                if(args.ids){
                    query['id'] = {in: args.ids}
                }

                return await prisma.form.findMany({
                    where: {
                        ...query,
                        organisation: context?.jwt?.organisation
                    }
                })
            },
            filesById: async (root: any, args: {ids: string[]}) => {
                const files = await prisma.file.findMany({where: {id: {in: args.ids}}})
                return files.map((x) => ({
                    ...x,
                    organisation: {id: x.organisation},
                    uploadedBy: x.uploadedBy ? {id: x.uploadedBy} : undefined
                }))
            },
            files: async (parent: any, args: {path: string}, context: any) => {
               const data = await listPath(prisma, args.path, context.jwt.organisation)
                // WHERE depth = ${parts.length + 1}

                return data?.map((x) => ({
                    ...x,
                    organisation: {id: x.organisation},
                    uploadedBy: x.uploadedBy ? {id: x.uploadedBy} : undefined
                }))
               
            },
        },
        Mutation: {
            createForm: async (root: any, args: any, context: any) => {
                return await prisma.form.create({
                    data: {
                        id: nanoid(),
                        name: args.input.name,
                        createdBy: context?.jwt?.id,
                        organisation: context?.jwt?.organisation
                    }
                })
            },
            updateForm: async (root: any, args: any, context: any) => {
                return await prisma.form.updateMany({
                    where: {
                        id: args.id,
                        organisation: context?.jwt?.organisation
                    },
                    data: {
                        name: args.input.name
                    }
                })
            },
            deleteForm: async (root: any, args: any, context: any) => {
                return await prisma.form.deleteMany({
                    where: {
                        id: args.id,
                        organisation: context?.jwt?.organisation
                    }
                })
            },
            commentOnFile: async (root: any, args: any, context: any) => {
                console.log("Comment", {context: context.jwt})
                return await prisma.file.update({
                    where: {
                        id: args.id,
                    },
                    data: {
                        comments: {create: [
                            {
                                id: '' || nanoid(),
                                comment: args.comment,
                                postedBy: context?.jwt?.id,
                            }
                        ]}
                    }
                })
            },
            deleteCommentOnFile: async (root: any, args: any, context: any) => {
                return await prisma.file.update({
                    where: {
                        id: args.id
                    },
                    data: {
                        comments: {
                            deleteMany: [
                                {
                                    id: args.comment, 
                                    postedBy: context?.jwt?.id
                                }
                            ]
                        }
                    }
                })
            },
            renameFile: async (parent: any, args: {path: string, newName: string}, context: any) => {
                const { path, newName } = args;

                const { id } = await getIDForPath(prisma, path, context?.jwt?.organisation) || {};

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

                const { id } = await getIDForPath(prisma, path, context?.jwt?.organisation) || {};
                
                const { id: newId } = await getIDForPath(prisma, newPath, context?.jwt?.organisation) || {};

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

                const { id, directory } = await getIDForPath(prisma, path, context?.jwt?.organisation) || {};
                
                if(id){

                    if(directory){
                        //TODO delete recursive
                        return await deleteFolder(prisma, persistence, path, context?.jwt?.organisation);
                        // return await prisma.file.delete({where: {id}})
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

                const { id: parentId } = await getIDForPath(prisma, path, context?.jwt?.organisation) || {};

                const { id: startDir, steps } = (await getLastPointInPath(prisma, path, context?.jwt?.organisation)) || {}

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

                            const { id: subId } = await getIDForPath(prisma, `/${part_path}`, context?.jwt?.organisation) || {};

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

                const { id: startDir, steps } = (await getLastPointInPath(prisma, path, context?.jwt?.organisation)) || {}
                const {id: parentId} = (await getIDForPath(prisma, path, context?.jwt?.organisation)) || {}


                if(args.recursive){
                    let results = [];
                    for(var i = parts.length - steps; i < parts.length; i++){
                        let part_path = parts.slice(0, i).join('/')
                        name = parts[i]

                        const { id: subId } = await getIDForPath(prisma, `/${part_path}`, context?.jwt?.organisation) || {};

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