var express = require('express');
var path = require('path');
var home = require('./route/home.js');
var customer = require('./route/customer.js');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));


//app.get('/', home.index);

app.get('/', home.index);

app.get('/customers', customer.show);

app.listen(3000);