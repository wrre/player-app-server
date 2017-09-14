var express = require('express');
var router = express.Router();
var PlayerDB = require('../lib/playerdb');

var player = new PlayerDB();

router.get('/data', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");

	player.getData(function(err, results) {
    res.send(results);
  });
});

router.get('/data/:skipNum/:limitNum', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");

	player.getDataByLimit(req.params, function(err, results) {
    res.send(results);
  });
});

module.exports = router;
