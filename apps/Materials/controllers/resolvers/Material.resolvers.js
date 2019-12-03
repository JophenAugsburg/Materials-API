const materialQueryResolvers = require('./Material.Query.resolvers');
const materialMutationResolvers = require('./Material.Mutation.resolvers');

module.exports.materialResolvers = {
  Query: materialQueryResolvers,
  Mutation: materialMutationResolvers
};
