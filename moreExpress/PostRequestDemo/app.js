const express = require('express');
const app = express();
// bodyparser to submit forms
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

let friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];

// routes

app.get('/', function(req, res) {
    res.render('home');
});

// route to post
app.post('/addfriend', function(req, res) {
    console.log(req.body);
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect('/friends');
});

app.get('/friends', function (req, res) {
    res.render('friends', {friends: friends});
});



app.listen(3000, function() {
    console.log('PostRequestDemo Server is running');
});