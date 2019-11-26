const { updateLogs } = require('../../../tools');
const { Tool } = require('../../models/Tool');

const createTool = async (name, userId, quantity, type ) => {
  
    const dateAdded = new Date(); //Date that the the tool is created. 
    const tool = new Tool ({
        createdBy: userId,
        name,
        type,
        dateAdded,
        quantity,
        quantityHistory: [
            {
              userId,
              type: "crearted",
              quanitity,
              date: dateAdded,
            },
          ],
          checkoutList: [],
          logs: [],
    });
    await tool.save();
    await updateLogs(tool.id, 'Tool', 'tool',1,name);
    return tool;
}

updateTool = async (id, userId, updateVariable, updateValue) => {
}

deleteTool = async (id) => Tool.findByIdAndDelete(id);

checkoutTool = async (id, userId, quantity) => ({
})

module.export = {
    createTool:({
        name, userId, type, quanntity 
    }) => createTool(name, userId, type, quantity),

    updateTool: ({
        id, userId, updateVariable, updateValue
      }) => updateTool(id, userId, updateVariable, updateValue),

      deleteTool: ({
        id
      }) => deleteTool(id),

      checkoutTool: ({
        id, userId, quantity
      }) => checkoutTool(id, userId, quantity),
};