const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hi there, welcome to my assignement!');
});


app.get('/speak/:animal', function(req, res) {
        let animal = req.params.animal;

    if (animal === 'pig'){
        console.log(animal);
        res.send("the pig says 'Oink'");
    }
    if (animal === 'dog'){
        res.send("the dog says 'whoof'");
    }
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
