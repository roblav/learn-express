var express = require('express');
var path = require('path');
var home = require('./route/home.js');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));


//app.get('/', home.index);

app.get('/', function(req, res){
    res.render('empty');
});

app.listen(3000);