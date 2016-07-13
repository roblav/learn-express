var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.redirect('/foo/bar');
});

app.get('/foo/bar', function (req, res) {
    res.sendFile(path.join(__dirname, 'hello.html'));

});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'about.html'));

});


app.listen(3000, function(){
    console.log('Server started on port 3000')
});