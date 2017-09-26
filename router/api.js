var express = require('express');
var request = require('request');
var router = express.Router();
var config = require('../ignore/config');
var PlayerDB = require('../lib/playerdb');

var player = new PlayerDB();

router.get('/*', function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

router.get('/channel', function(req, res) {
	player.getData(function(err, results) {
    res.send(results);
  });
});

router.get('/channel/:skipNum/:limitNum', function(req, res) {
	player.getDataByLimit(req.params, function(err, results) {
    res.send(results);
  });
});

router.get('/video/:id', function(req, res) {
  var URI = config.video.uri + req.params.id;

  request(URI, function (error, response, body) {
    res.send(body);
  });
});

router.get('/searchName/:name', function(req, res) {
  player.searchByName(req.params, function(err, results) {
    res.send(results);
  });
});

module.exports = router;
