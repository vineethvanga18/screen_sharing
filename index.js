var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);

app.listen(8000, '0.0.0.0');

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
})