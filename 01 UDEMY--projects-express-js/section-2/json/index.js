var express = require('express');
var app = express();
var path = require('path');


// Set static paths

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public/home.html'));
});

//View json file

app.get('/people', function(req, res){

    var people = [
        {
            first_name: "Bob",
            last_name: "Jones",
            age: 25,
            gender: "male"
        },
        {
            first_name: "Tom",
            last_name: "Smith",
            age: 25,
            gender: "male"
        }
    ];

    res.json(people);
});

// Download file

app.get('/download', function(req, res){

    res.download(path.join(__dirname, '/downloads/github-git-cheat-sheet.pdf'));
});

app.listen(3000, function(){
    console.log('Server started on port 3000')
});