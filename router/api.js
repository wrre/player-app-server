var express = require('express');
var request = require('request');
var router = express.Router();
var config = require('../ignore/config');
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

router.get('/video/:id', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  var URI = config.video.uri + req.params.id;

  request(URI, function (error, response, body) {
    res.send(body);
  });
});

module.exports = router;
