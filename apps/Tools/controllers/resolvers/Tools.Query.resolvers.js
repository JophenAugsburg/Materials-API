

const getTools = () => Tool.find();

const getToolById = id => Tool.findById(id);

const getToolByName = name => Tool.findOne({ name });

const getToolByType = type => Tool.findOne({ type });

module.exports = {
    getTools: () => getTools(),
    getToolById: ({ id }) => getToolById(id),
    getToolByName: ({ name }) => getToolByName(name),
    getToolByType: ({ type }) => getToolByType(type),
};
