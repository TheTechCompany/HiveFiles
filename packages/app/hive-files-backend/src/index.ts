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

import { Pool } from 'pg';

import neo4j from 'neo4j-driver'


(async () => {
    const app = express();

    app.use(bodyParser.json())

	// const driver = neo4j.driver(
	// 	process.env.NEO4J_URI || "localhost",
	// 	neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "test")
	// )

    const pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'test',
        database: 'hivefiles'
    })

    console.log({typeDefs})

    const graphServer = new HiveGraph({
        rootServer: process.env.ROOT_SERVER || 'http://localhost:7000',
        schema: {
            typeDefs,
            resolvers: resolvers(pool)
        },
        dev: false,
        uploads: true
    })

    await graphServer.init();

    // app.use('/graphql', graphqlUploadExpress({maxFileSize: 100 * 1024 * 1024, maxFiles: 20}))
    // app.use('/graphql', (req, res) => {
    //     console.log(req.headers)
    // })
    app.use(graphServer.middleware) 

    app.listen(9013, () => {
        console.log("Listening on 9013")   
    })

})()