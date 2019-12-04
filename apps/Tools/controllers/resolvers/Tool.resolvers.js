const toolQueryResolvers = require('./Tool.Query.resolvers');
const toolMutationResolvers = require('./Tool.Mutation.resolvers');

module.exports.toolResolvers = {
  Query: toolQueryResolvers,
  Mutation: toolMutationResolvers
};
