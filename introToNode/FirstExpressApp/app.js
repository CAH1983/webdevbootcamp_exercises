const express = require('express');
const app = express();


// create routes


// '/' => 'Hi there'
app.get('/', function(req, res) {
    res.send('Hi there');
});

app.get('/bye', function(req, res) {
    res.send('Goodbye!');
});

app.get('/dog', function(req, res) {
    console.log('someone made a request to /dog');
    res.send('worf!');
});

// * is a wildcard that matches any url not defined
app.get('*', function(req, res) {
    res.send('Error, not found ☹️');
});

// start server
app.listen(3000, function() {
    console.log('Server has started on port 3000');
});


