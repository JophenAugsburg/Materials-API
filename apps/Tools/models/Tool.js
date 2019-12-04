const { dbs } = require('../../configs');

module.exports.Tool = dbs.db1().model('Tool', {
  createdBy: String, 
  name: String,
  type: String,
  dataAdded: Date,
  quantity: Number,
  quantityHistory: [{}],
  checkoutList: [{}],
  logs: [{}]
});
