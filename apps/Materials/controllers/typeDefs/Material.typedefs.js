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

    type Material {
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
        getMaterials: [Material!]!
        getMaterialById(id: ID!): Material
        getMaterialByName(name: String!): Material
        getMaterialByType(type: String!): [Material]!
    }

    type Mutation {
        createMaterial(name: String!,  userId: String!, type: String!, quantity: Int!): Material!
        updateMaterial(id: ID!, userId: String!, updateVariable: String!, updateValue: String!): Material!
        deleteMaterial(id: ID!): Material!
        checkoutMaterial(id: ID! userId: String!, quantity: Int!): Material!
    }
`;

module.exports.materialTypedefs = buildSchema(`${defs}`);
