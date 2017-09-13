var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var apis = require('./router/api');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/apis', apis);

app.listen(12345);
