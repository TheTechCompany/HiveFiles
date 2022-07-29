export default `

    extend type Query {
        forms(ids: [ID]): [Form] @merge(keyField: "id", keyArg: "ids")
    }

    extend type Mutation {
        createForm(input: FormInput): Form
        updateForm(id: ID, input: FormInput): Form
        deleteForm(id: ID): Form
    }

    input FormInput {
        name: String
    }

    type Form {
        id: ID
        name: String

        versions: [FormSchema]

        submissions: [FormSubmission]

        createdBy: HiveUser
        createdAt: DateTime

        organisation: HiveOrganisation
    }

    type FormSchema {
        id: ID
        version: String

        blocks: [FormBlock]

        createdAt: DateTime

        submissions: [FormSubmission]

        form: Form
    }

    type FormBlock {
        id: ID

        order: Int
        type: String
        extras: String

        children: [FormBlock]
        parent: FormBlock

        schema: FormSchema
    }

    type FormSubmission {
        id: ID
        data: String
        createdAt: DateTime

        version: FormSchema
        form: Form
    }
    
`   