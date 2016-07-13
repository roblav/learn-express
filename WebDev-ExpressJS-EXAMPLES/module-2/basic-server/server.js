/**
 * TASK: Create a simple Hello World example
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/customers', function (req, res) {
    res.send('Welcome to customers!');
});

app.get('/customers/create', function (req, res) {
    res.send('This page is to create customers');
});



app.listen(3000);

//var server = app.listen(3000, function(){
//
//    var host = server.address().address;
//    var port = server.address().port;
//
//    console.log('Example app listening at http://%s:%s', host, port);
//});

//