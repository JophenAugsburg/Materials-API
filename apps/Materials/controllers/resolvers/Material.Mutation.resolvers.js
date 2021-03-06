const { updateLogs } = require('../../../tools');
const { Material } = require('../../models/Material');

const createMaterial = async (name, userId, type, quantity) => {
  const dateAdded = new Date();
  const material = new Material({
    createdBy: userId,
    name,
    type,
    dateAdded,
    quantity,
    quantityHistory: [
      {
        userId,
        type: "add",
        quantity,
        date: dateAdded,
      },
    ],
    checkoutList: [],
    logs: [],
  });
  await material.save();
  await updateLogs(material._id, 'Material', 'material', 1, name);
  return material;
};

updateMaterial = async (id, userId, updateVariable, updateValue) => {

}

deleteMaterial = async (id) => Material.findByIdAndDelete(id);

checkoutMaterial = async (id, userId, quantity) => {

}

module.exports = {
  createMaterial: ({
    name, userId, type, quantity
  }) => createMaterial(name, userId, type, quantity),
  updateMaterial: ({
    id, userId, updateVariable, updateValue
  }) => updateMaterial(id, userId, updateVariable, updateValue),
  deleteMaterial: ({
    id
  }) => deleteMaterial(id),
  checkoutMaterial: ({
    id, userId, quantity
  }) => checkoutMaterial(id, userId, quantity),
};
