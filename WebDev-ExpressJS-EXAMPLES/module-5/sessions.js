var express = require('express');
var cookieParser = require('cookie-parser')
var session = require('express-session')

var app = express();


app.use(cookieParser());
app.use(session({ secret: 'Passphrase to encrpyt session'}));


app.get('/', function (req, res) {
    console.log(req.sessionID);
    req.session.name = req.session.name || new Date().toUTCString();
    res.send(req.session.name);
});

app.listen(3000);