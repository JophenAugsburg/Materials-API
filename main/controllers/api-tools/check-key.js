// Check the key
module.exports.checkKey = async (req, res, next) => {
  console.log(req.body);
  if (req.body.key != process.env.API_KEY) {
    console.log('invalid key', req.body.key, 'tried');
    res.send('invalid key');
    return false;
  }
  next();
};
