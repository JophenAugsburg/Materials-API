const { dbs } = require('../../configs');

module.exports.Material = dbs.db1().model('Material', {
  createdBy: String, // userId of the user that created it
  name: String,
  type: String,
  dataAdded: Date,
  quantity: Number,
  quantityHistory: [{}],
  checkoutList: [{}],
  logs: [{}]
});
