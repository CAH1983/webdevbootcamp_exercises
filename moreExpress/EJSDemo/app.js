var express = require('express');
var app = express();

// make the public folder available in the app
app.use(express.static('public'));

// we won't need to type the extension .ejs anymore at the end of the name of the pages we want to render
app.set('view engine', 'ejs');


// routes
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/drinkabeerwith/:character', function(req,res){
    var charac = req.params.character;
    res.render('beer', {charac});
});

app.get('/posts', function(req, res) {
    var posts = [
        {title: 'Make beers great again', author: 'Donald Trump'},
        {title: 'I prefer vodka sorry', author: 'Boris Elstine'},
        {title: 'Any alcoholic drinks would do me', author: 'Theresa May'},
        {title: 'Vodka', author: 'Vladimir Poutine'},
        {title: 'OktoberFest beers', author: 'Angela Merkel'},
        {title: 'Rhum', author: 'Che Guevara'},
        {title: 'Only champagne with Krusty', author: 'Kim Kardashian'},
    ];
    res.render('p', {posts});
});


// start server on port 3000
app.listen(3000, function(){
    console.log('server is listening');
});