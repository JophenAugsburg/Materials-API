const { dbs } = require('../../configs');

module.exports.Tool = dbs.db1().model('tool', {
  createdBy: String, // userId of the user that created it
  name: String,
  type: String,
  dateAdded: Date,
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
    quantity: Number,
    dateCheckedOut: Date,
    dueDate: Date,
    jobId: String,
  }],
  logs: [{
    time: Date,
    message: String,
  }]
});
