import { writeFileSync } from 'fs';
import { Driver } from 'neo4j-driver';
import { getCypherQueryForPath } from '../utils';
import { Pool } from 'pg';

export default (pool: Pool) => ({
    // Upload: GraphQLUpload,
    Query : {
        filesById: async (root: any, args: {ids: string[]}) => {
            console.log("filesById", {args})
           const res = await pool.query(
                `SELECT * FROM files WHERE id = ANY($1::varchar[])`,
                [args.ids]
            )
            console.log({rows: res.rows})
            return res.rows;
        },
        files: async (parent: any, args: {path: string}, context: any) => {
            let parts = args.path.split('/')
            parts = parts.slice(1, parts.length);

            console.log("files", {parts})
            const res = await pool.query(
                `SELECT * FROM files`
            )
            return res.rows
            // const session = driver.session();

            // const files = await session.readTransaction(async (tx) => {
            //     // const res = tx.run(`
            //     //     WITH $parts as path_parts
            //     //     MATCH path = (:HiveOrganisation)-[:HAS_FILE]->(startFile {name: path_parts[0]})
            //     //     OPTIONAL MATCH fullPath = (:HiveOrganisation)-[:HAS_FILE]->(startFile)-[:HAS_FILE *..]->({name: path_parts[size(path_parts) - 1]})
            //     //     WITH coalesce(fullPath, path) as path, path_parts
            //     //     WITH path, reduce(values = [], n in nodes(path) | values + [n.name]) as reduced
            //     //     WHERE reduced[1..size(reduced)] = path_parts
            //     //     RETURN path
            //     // `)

            //     const {query, path} = getCypherQueryForPath(args.path);

            //     console.time('File.find')
            //     const res = await tx.run(`
            //         MATCH path = (org:HiveOrganisation {id: $org})${query}-[:HAS_FILE]->(files)
            //         RETURN collect(files{.*, isFolder: LABELS(files)[0] = "Directory"})
            //     `, {
            //         org: context.jwt?.organisation,
            //         path_parts: path
            //     })
            //     console.timeEnd('File.find')

            //     return res.records?.[0]?.get(0)
            // })
            // await session.close()
            // return files;
        },
    },
    Mutation: {
        uploadFiles: async (parent: any, args: any) => {
            console.log({args, files: args.files.length})
            const files = await Promise.all(args.files.map(async (file: any) => {
                const { createReadStream, filename } = await file;
                
                const fileData = await new Promise<Buffer>((resolve, reject) => {
                    const readStream = createReadStream();
                    const buffers: Buffer[] = [];
                    console.log({readStream})
                    readStream.on('error', reject)
        
                    readStream.on('data', (data: Buffer) => {
                        console.log("Data", data.length)
                        buffers.push(data)
                    })
        
                    readStream.on('end', () => {
                        console.log("END", {buffers: Buffer.concat(buffers).length})
                        resolve(Buffer.concat(buffers))
                    })
                })

                writeFileSync(filename, fileData)
                return {data: fileData, filename}
            }))

        },
        mkdir: async (parent: any, args: {name: string, path: string}, context: any) => {
            // const session = driver.session();

            // const res = await session.writeTransaction(async (tx) => {

            //     const {query, path} = getCypherQueryForPath(args.path);

            //     const res = await tx.run(`
            //         MATCH path = (org:HiveOrganisation {id: $org})${query}
            //         WITH last(nodes(path)) as parent
            //         CREATE (dir:Directory {name: $name})
            //         CREATE (parent)-[:HAS_FILE]->(dir)
            //         RETURN dir{.*, parent: parent{.*}}
            //     `, {
            //         org: context?.jwt?.organisation,
            //         name: args.name,
            //         path_parts: path
            //         // parent_path: args.path.split('/').slice(1, args.path.split('/').length - 1),
            //     })
            //     return res.records?.[0]?.get(0)
            // })
            // return res;
        },
        get: async (parent: any, args: {path: string}) => {

        },
        put: async (parent: any, args: { file: Promise<any>, path: string }, context: any) => {
            // const session = driver.session();

            // const { createReadStream, filename } = await args.file;

            // const fileData = await new Promise<Buffer>((resolve, reject) => {
            //     const readStream = createReadStream();
            //     const buffers: Buffer[] = [];

            //     readStream.on('error', reject)
    
            //     readStream.on('data', (data: Buffer) => {
            //         buffers.push(data)
            //     })
    
            //     readStream.on('end', () => {
            //         resolve(Buffer.concat(buffers))
            //     })
            // })

            // writeFileSync('./test.txt', fileData)

            // const fileResult = await session.writeTransaction(async (tx) => {
            //     const {query, path} = getCypherQueryForPath(args.path);
            //     console.log({query, path: args.path, parts: path})
            //     const d = await tx.run(`
            //         MATCH path = (:HiveOrganisation {id: $org})${query}
            //         WITH last(nodes(path)) as parent
            //         CREATE (f:File {name: $name})
            //         CREATE (parent)-[:HAS_FILE]->(f)
            //         RETURN f{.*}
            //     `, {
            //         org: context?.jwt?.organisation,
            //         name: filename,
            //         path_parts: path
            //     })
            //     return d.records?.[0]?.get(0);
            // })

            // await session.close()
            
            // return fileResult;
        }
    }
})