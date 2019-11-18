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
        quantity: Integer
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
        quantity: Integer
        quantityHistory: [QuanitityHistory]
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
        createMaterial(name: String!, quantity: Integer!): Material!
    }
`;

module.exports.materialTypedefs = buildSchema(`${defs}`);
