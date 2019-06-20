const mongoose = require("mongoose");

mongoose.set('debug', true);//useful to see the actual mongo queries being actually run in the terminal
mongoose.Promise = Promise;//so we do not have to use a call back pattern and also so we can use ES2017 async functions that return promises.
mongoose.connect('mongodb://localhost/warbler', {
  keepAlive: true,
  useMongoClient: true, //important so we do not get some warnings about Mongo
  useNewUrlParser: true
});

module.exports.User = require("./user");  //bundling