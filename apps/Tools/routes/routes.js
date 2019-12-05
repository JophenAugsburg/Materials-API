const { graphql } = require('graphql');
const express = require('express');
const { checkKey } = require('../../tools');
const { toolResolvers } = require('../controllers/resolvers/Tool.resolvers');
const { toolTypedefs } = require('../controllers/typeDefs/Tool.typedefs');

const router = express.Router();

let graphQL;

router.get('/', checkKey, async (req, res) => graphQL(req.body, res));

graphQL = async (body, res) => {
  const { query } = body;

  let resolversType = 'Query';
  if (query.includes('mutation')) {
    resolversType = 'Mutation';
  }
  const result = await graphql(toolTypedefs,
    query,
    toolResolvers[resolversType]).then(response => response);
  res.send(result);
};

module.exports.routes = router;
