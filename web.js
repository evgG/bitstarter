var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var readfile = fs.readFileSync('index.html', "ascii");
var buf = new Buffer(readfile.length);
buf.write(readfile, "ascii");


app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buf.toString("ascii"));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
