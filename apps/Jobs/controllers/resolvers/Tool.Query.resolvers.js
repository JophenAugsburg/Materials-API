const { updateLogs } = require('../../../tools');
const { Material } = require('../../models/Material');

const getMaterials = () => Material.find();

const getMaterialById = id => Material.findById(id);

const getMaterialByName = name => Material.findOne({ name });

const getMaterialByType = type => Material.findOne({ type });

module.exports = {
  getMaterials: () => getMaterials(),
  getMaterialById: ({ id }) => getMaterialById(id),
  getMaterialByName: ({ name }) => getMaterialByName(name),
  getMaterialByType: ({ type }) => getMaterialByType(type),
};
