var express = require('express');
var router = express.Router();
var PlayerDB = require('../lib/playerdb');

router.get('/data', function(req, res) {
  var player = new PlayerDB();

	player.getData(function(err, results) {
    res.send(results);
  });


});

module.exports = router;
