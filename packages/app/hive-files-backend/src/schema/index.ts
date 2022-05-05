import { gql } from 'graphql-tag'

import fileSchema from './file'

export default `

    type Query {
        filesById(ids: [ID]): [File] @merge(keyField: "id", keyArg: "ids")
        files(path: String!): [File]!
    }

    type Mutation {
        
        uploadFiles(files: [Upload]): String

        put(file: Upload!, path: String!): File!

        get(path: String!): String!
        delete(path: String!): String!

        rename(path: String!, newName: String!): String!
        move(path: String!, newPath: String!): String!
        copy(path: String!, newPath: String!): String!

        mkdir(path: String!, name: String!): File!
    }
   
    ${fileSchema}
`