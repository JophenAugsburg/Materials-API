const { buildSchema } = require('graphql');

const defs = `
    scalar Date
    scalar JSON

    scalar Part {
        partId: String
        partNumber: String
        orderQty: String
    }

    scalar Log {
        time: Date
        message: String
    }

    type Job {
        id: ID!
        createdBy: String
        complete: Boolean
        job: String
        dateAdded: Date
        totalAmount: Float
        qparts: [Part]
        logs: [Log]
    }

    type Query {
        getJobs: [Job!]!
        getJobById(id: ID!): Job
        getJobsByUser(userId: String!): [Job]!
    }

    type Mutation {
        createJob(name: String!,  userId: String!, type: String!, quantity: Int!): Job!
        updateJob(id: ID!, userId: String!, updateVariable: String!, updateValue: String!): Job!
        deleteJob(id: ID!): Job!
        checkoutJob(id: ID! userId: String!, quantity: Int!): Job!
    }
`;

module.exports.jobTypedefs = buildSchema(`${defs}`);
