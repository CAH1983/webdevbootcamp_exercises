var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.render('home.ejs');
});


app.get('/drinkabeerwith/:character', function(req,res){
    var charac = req.params.character;
    res.render('beer.ejs', {charac});
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
    res.render('posts.ejs', {posts});
})

app.listen(3000, function(){
    console.log('server is listening');
});