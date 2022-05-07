/* 
    hive-files backend
    Scaffolded with @hexhive/cli
*/

import { config } from 'dotenv'

config();

import express from 'express'

import bodyParser from 'body-parser';

import { HiveGraph } from '@hexhive/graphql-server'

import typeDefs from './schema';
import resolvers from './resolvers';

import schema from './schema'

import { Prisma, PrismaClient } from '@prisma/client'

(async () => {
    const prisma = new PrismaClient();

    const filePath = `/Folder/Folder2`

    const fileParts = filePath.split('/').slice(1);

    console.log(fileParts.join(','))

   const d = await prisma.$queryRaw`
        WITH RECURSIVE cte(id, name, parentId, pathZ, depth) AS (
            SELECT id, name, "parentId", ARRAY[name], 1
                FROM "File" WHERE "parentId" is null AND name = (string_to_array(${fileParts.join(',')}, ','))[1]
            
            UNION ALL
            
            SELECT a.id, a.name, a."parentId", pathZ || a.name, depth + 1
                FROM "File" as a JOIN cte ON cte."id" = a."parentId"
            WHERE a.name=(string_to_array(${fileParts.join(',')}, ','))[depth + 1]
            OR (
                a."parentId" = cte."id" 
                    AND 
                depth + 1 = array_length(string_to_array(${fileParts.join(',')}, ','), 1) + 1
            ) 
        )
        SELECT *, array_to_string(pathZ, '/')
        FROM cte
        WHERE depth > ${fileParts.length}
    `

    console.log({d});

    const app = express();

    app.use(bodyParser.json())

    const { typeDefs, resolvers } = schema(prisma)

    const graphServer = new HiveGraph({
        rootServer: process.env.ROOT_SERVER || 'http://localhost:7000',
        schema: {
            typeDefs,
            resolvers
        },
        dev: false,
        uploads: true
    })

    await graphServer.init();

    app.use(graphServer.middleware) 

    app.listen(9013, () => {
        console.log("Listening on 9013")   
    })

})()