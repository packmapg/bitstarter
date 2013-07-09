var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    buf = new Buffer(255);
//    response.send(buf.toString(
      response.send(
	fs.readFile('./index.html', ecncoding)
    );			       
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
