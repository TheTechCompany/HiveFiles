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

import { PrismaClient } from '@prisma/client'

(async () => {
    const prisma = new PrismaClient();

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