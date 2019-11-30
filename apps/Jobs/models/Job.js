const { dbs } = require('../../configs');

module.exports.Job = dbs.db1().model('Job', {
  createdBy: String, // userId of the user that created it
  job: String,
  complete: Boolean,
  dataAdded: Date,
  orderDate: Date,
  totalAmount: Number,
  parts: [{
    partId: String,
    partNumber: String,
    orderQty: Number,
  }],
  logs: [{
    time: Date,
    message: String,
  }]
});
