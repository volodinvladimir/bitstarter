var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  var fs=require("fs");
  var buffer = new Buffer =  fs.readFileSync('index.html');
  var data = buffer.toString("utf8", 0 , buffer.length;
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
