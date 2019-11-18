const { dbs } = require('../../configs');

module.exports.Tool = dbs.db1().model('Tool', {
  name: String,
  type: String,
  dataAdded: Date,
  quantity: Number,
  quantityHistory: [{
    userId: String,
    type: String, // add or remove
    quantity: Number,
    date: Date,
  }],
  checkoutList: [{
    userId: String,
    username: String,
    firstName: String,
    lastName: String,
    quantity: Number,
    dateCheckedOut: Date,
  }],
  logs: [{
    time: Date,
    message: String,
  }]
});
