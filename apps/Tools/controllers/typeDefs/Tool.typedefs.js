const { buildSchema } = require('graphql');

const defs = `
    scalar Date
    scalar JSON

    scalar QuantityHistory {
        userId: String
        type: String
        quantity: String
        date: Date
    }

    scalar Checkout {
        userId: String
        username: String
        quantity: String
        dateCheckedOut: Date,
        dueDate: Date,
        jobId: String,
    }

    scalar Log {
        time: Date
        message: String
    }

    type Tool {
        id: ID!
        name: String
        type: String
        dateAdded: Date
        quantity: String
        quantityHistory: [QuantityHistory]
        checkoutList: [Checkout]
        logs: [Log]
    }

    type Query {
        getTools: [Tool!]!
        getToolsById(id: ID!): Tool
        getToolByName(name: String!): Tool
        getToolByType(type: String!): [Tool]!
    }

    type Mutation {
        createTool(name: String!,  userId: String!, type: String!, quantity: String!): Tool!
        updateTool(id: ID!, userId: String!, updateVariable: String!, updateValue: String!): Tool!
        deleteTool(id: ID!): Tool!
        checkoutTool(id: ID! userId: String!, quantity: Int!): Tool!
    }
`;

module.exports.toolTypedefs = buildSchema(`${defs}`);
