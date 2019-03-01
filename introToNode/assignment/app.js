const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hi there, welcome to my assignement!');
});

// app.get(url, function(req, res) {
//     switch(url) {
//         case '/speak/pig':
//         res.send("The pig says 'Oink'")
//         break;

//         case '/speak/cow':
//         res.send("The cow says 'Moo'")
//         break;
//     }
// });

// app.get('/speak/:animal', function(req, res) {
//     if (req.params.animal === 'pig'){
//         console.log(params.animal);
//         res.send("the pig says 'Oink'");
//     }
//     if (req.params.animal === 'dog'){
//         res.send("the dog says 'whoof'");
//     }
// });

app.get('/speak/pig', function(req, res) {
    res.send("the pig says 'Oink'");
});

app.get('/speak/dog', function(req, res) {
    res.send("the dog says 'whoof'");
});

app.get('/speak/cat', function(req, res) {
    res.send("the cat says 'Mooh'");
});


app.get('/repeat/:word/:numTimes', function(req, res) {
    let wordToRepeat = req.params.word;
    let howManyTimes = parseInt(req.params.numTimes);
    console.log(wordToRepeat, howManyTimes);
    res.send((wordToRepeat+ ' ').repeat(howManyTimes));

});




// start server
app.listen(3000, function() {
    console.log('Assignement Server has started');
});
