/**
 * TASK: Create a simple Hello World example
 */

var express = require('express');
var home = require('./route/home.js');
var customer = require('./route/customer.js');

var app = express();

app.get('/', home.index);

app.get('/customer', customer.index);
app.get('/customer/create', customer.create);
app.get('/customer/create/:id', customer.userid);

app.listen(3000);

//var server = app.listen(3000, function(){
//
//    var host = server.address().address;
//    var port = server.address().port;
//
//    console.log('Example app listening at http://%s:%s', host, port);
//});

//