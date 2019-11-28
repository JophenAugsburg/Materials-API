const jobQueryResolvers = require('./Job.Query.resolvers');
const jobMutationResolvers = require('./Job.Mutation.resolvers');

module.exports.materialResolvers = {
  Query: jobQueryResolvers,
  Mutation: jobMutationResolvers
};
