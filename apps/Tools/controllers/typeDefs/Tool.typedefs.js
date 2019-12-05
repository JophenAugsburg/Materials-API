const { buildSchema } = require('graphql');

const defs = `
    scalar Date
    scalar JSON

    scalar QuantityHistory {
        userId: String
        type: String
        quantity: Intger
        date: Date
    }

    scalar Checkout {
        userId: String
        username: String
        firstName: String
        lastName: String
        quantity: Int
        dateCheckedOut: Date
    }

    scalar Log {
        time: Date
        message: String
    }

    type Tool {
        id: ID!
        name: String
        type: String
        dataAdded: Date
        quantity: Int
        quantityHistory: [QuantityHistory]
        checkoutList: [Checkout]
        logs: [Log]
    }

    type Query {
        getTool: [Tool!]!
        getToolById(id: ID!): Tool
        getToolByName(name: String!): Tool
        getToolByType(type: String!): [Tool]!
    }

    type Mutation {
        createTool(name: String!,  userId: String!, type: String!, quantity: Int!): Tool!
        updateTool(id: ID!, userId: String!, updateVariable: String!, updateValue: String!): Tool!
        deleteTool(id: ID!): Tool!
        checkoutTool(id: ID! userId: String!, quantity: Int!): Tool!
    }
`;

module.exports.toolTypedefs = buildSchema(`${defs}`);
