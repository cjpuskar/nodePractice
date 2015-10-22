var express = require('express')
var app = express();

app.get('/', function(req, res) { // response to any web request to /
  res.send("Hello");              // send "Hello" as response text
});

app.listen(3000);  // Listen on port 3000