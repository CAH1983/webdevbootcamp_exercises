const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hi there, welcome to my assignement!');
});

// =========== My solution =================
app.get('/speak/:animal', function(req, res) {
        let animal = req.params.animal;

    if (animal === 'pig'){
        console.log(animal);
        res.send("the " + animal + " says 'Oink'");
    }
    if (animal === 'dog'){
        res.send("the " + animal + " says 'whoof'");
    } else {
        res.send("the " + animal + " says whatever");
    }
});


app.get('/repeat/:word/:numTimes', function(req, res) {
    let wordToRepeat = req.params.word;
    let howManyTimes = parseInt(req.params.numTimes);
    console.log(wordToRepeat, howManyTimes);
    res.send((wordToRepeat+ ' ').repeat(howManyTimes));
});

app.get('*', function(req, res) {
    res.send('⛔️Error 404');
})
// ========== teacher's solutions ===============
// app.get('/speak/:animal', function(req, res) {
//     var sounds = {
//         pig: 'oink',
//         cow: 'Moo',
//         dog: 'woof',
//         cat: 'I hate you human',
//         goldfish: '...'
//     }
//     var animal = req.params.animal.toLowerCase();
//     var sound = sounds[animal];
//     res.send("The " + animal + " says '" + sound + "'");
// });

// app.get("/repeat/:message/:times", function(req, res) {
//     var message = req.params.message;
//     var times = Number(req.params.times);
//     var result = "";

//     for(var i=0; i<times; i++) {
//         result += message + ' ';
//     }
//     res.send(result);
// })

// app.get('*', function(req, res) {
//     res.send('Sorry, page not found.. what are you doing with your life?')
// });

// start server
app.listen(3000, function() {
    console.log('Assignement Server has started');
});
