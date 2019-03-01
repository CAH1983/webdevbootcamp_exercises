var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.render('home.ejs');
});


app.get('/drinkabeerwith/:character', function(req,res){
    var charac = req.params.character;
    res.render('beer.ejs', {charac});
});



app.listen(3000, function(){
    console.log('server is listening');
});