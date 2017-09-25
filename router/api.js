var express = require('express');
var request = require('request');
var router = express.Router();
var config = require('../ignore/config');
var PlayerDB = require('../lib/playerdb');

var player = new PlayerDB();

router.get('/channel', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");

	player.getData(function(err, results) {
    res.send(results);
  });
});

router.get('/channel/:skipNum/:limitNum', function(req, res) {
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

router.get('/searchName/:name', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");

  player.searchByName(req.params, function(err, results) {
    res.send(results);
  });
});

module.exports = router;
