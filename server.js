const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000);
