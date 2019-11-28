const toolQueryResolvers = require('./Tool.Query.resolvers');
const toolMutationResolvers = require('./Tool.Mutation.resolvers');

module.exports.materialResolvers = {
  Query: toolQueryResolvers,
  Mutation: toolMutationResolvers
};
