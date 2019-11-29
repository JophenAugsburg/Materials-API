const { dbs } = require('../../configs');

module.exports.Job = dbs.db1().model('Job', {
  createdBy: String, // userId of the user that created it
  name: String,
  type: String,
  dataAdded: Date,
  quantity: Number,
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
