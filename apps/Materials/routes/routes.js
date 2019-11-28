const { graphql } = require('graphql');
const express = require('express');
const { checkKey } = require('../../tools');
const { materialResolvers } = require('../controllers/resolvers/material.resolvers');
const { materialTypedefs } = require('../controllers/typeDefs/material.typedefs');

const router = express.Router();

let graphQL;

router.get('/', checkKey, async (req, res) => graphQL(req.body, res));

graphQL = async (body, res) => {
  const { query } = body;

  let resolversType = 'Query';
  if (query.includes('mutation')) {
    resolversType = 'Mutation';
  }
  
  const result = await graphql(materialTypedefs,
    query,
    materialResolvers[resolversType]).then(response => response.data);

    res.send(result);
};

module.exports.routes = router;
