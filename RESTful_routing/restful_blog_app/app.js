var bodyParser = require('body-parser'),
mongoose = require('mongoose'),
express = require('express'),
app = express();

// APP CONFIG
mongoose.connect('mongodb://localhost/restful_blog_app', {
    useNewUrlParser: true
});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE /MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date, 
        default: Date.now //default is for set a value as default
    }
})

var Blog = mongoose.model('blog', blogSchema);

Blog.create({
    title: 'Test blog',
    image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1560&q=80',
    body: 'this is a blog post',

});
// RESTful ROUTES

app.get('/blogs', function(req, res) {
    res.render('index');
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('SERVER IS RUNNING!! *_*');
    
})
