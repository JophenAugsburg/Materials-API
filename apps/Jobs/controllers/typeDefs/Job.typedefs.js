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

    type Job {
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
        getJobs: [Job!]!
        getJobById(id: ID!): Job
        getJobByName(name: String!): Job
        getJobByType(type: String!): [Job]!
    }

    type Mutation {
        createJob(name: String!,  userId: String!, type: String!, quantity: Int!): Job!
        updateJob(id: ID!, userId: String!, updateVariable: String!, updateValue: String!): Job!
        deleteJob(id: ID!): Job!
        checkoutJob(id: ID! userId: String!, quantity: Int!): Job!
    }
`;

module.exports.jobTypedefs = buildSchema(`${defs}`);
