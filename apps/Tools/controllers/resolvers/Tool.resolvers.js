const toolQueryResolvers = require('./Tools.Query.resolvers');
const toolMutationResolvers = require('./Tools.Mutation.resolvers');

module.exports.toolResolvers = {
  Query: toolQueryResolvers,
  Mutation: toolMutationResolvers
};
