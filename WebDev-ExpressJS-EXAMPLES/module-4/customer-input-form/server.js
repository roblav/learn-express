var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var home = require('./route/home.js');
var customer = require('./route/customer.js');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', home.index);

app.get('/', home.index);

app.get('/customer', customer.show);

app.get('/customer/create', customer.create);
app.post('/customer/create', customer.createCustomer);

app.get('/customer/details/:id', customer.details);

app.listen(3000);