var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    buf = new Buffer(256);
    response.send(buf.toString(
	fs.readFile('./index.html')
    ));			       
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
