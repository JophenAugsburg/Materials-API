const { updateLogs } = require('../../../tools');
const { Tool } = require('../../models/Tool');

const getTool = () => Tool.find();

const getToolById = id => Tool.findById(id);

const getToolByName = name => Tool.findOne({ name });

const getToolByType = type => Tool.findOne({ type });

module.exports = {
  getTool: () => getTool(),
  getToolById: ({ id }) => getToolById(id),
  getToolByName: ({ name }) => getToolByName(name),
  getToolByType: ({ type }) => getToolByType(type),
};
