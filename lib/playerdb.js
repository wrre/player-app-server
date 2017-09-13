var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var PlayerDB = module.exports = function() {
};

PlayerDB.prototype.getData = function(callback) {
  MongoClient.connect('mongodb://localhost/player', function(err, db) {
    var collection = db.collection('channels');
    collection.find({}).skip(0).limit(2).toArray(function(err, results) {
      if (callback)
        callback(null, results);
    });
  });

};
