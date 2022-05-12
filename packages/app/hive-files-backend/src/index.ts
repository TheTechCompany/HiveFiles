/* 
    hive-files backend
    Scaffolded with @hexhive/cli
*/

import { config } from 'dotenv'

config();

import AWS, { Credentials } from 'aws-sdk'

import express from 'express'

import bodyParser from 'body-parser';

import { HiveGraph } from '@hexhive/graphql-server'

import typeDefs from './schema';
import resolvers from './resolvers';

import schema from './schema'

import { Prisma, PrismaClient } from '@prisma/client'
import { PersistenceEngine } from './persistence';

(async () => {

    if(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY){
        const credentials = new Credentials({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        })

        AWS.config = new AWS.Config({
            credentials,
            region: 'ap-southeast-2',
        })
        
    }else{
        AWS.config = new AWS.Config({
            region: 'ap-southeast-2'
        })
    }


    const persistence = new PersistenceEngine(process.env.BUCKET_NAME || 'test-bucket')

    const prisma = new PrismaClient();

    const app = express();

    app.use(bodyParser.json({limit: '500mb'}))

    const { typeDefs, resolvers } = schema(prisma, persistence)

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