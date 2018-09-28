var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello ");
  res.send("World World");
});

app.listen(4000);