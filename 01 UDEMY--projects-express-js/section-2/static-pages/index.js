var express = require('express');
var app = express();
var path = require('path');

// Set static paths

app.use(express.static(path.join(__dirname, 'public')))


app.listen(3000, function(){
    console.log('Server started on port 3000')
});