var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('short'));

app.set('views', './views');
app.set('view engine', 'ejs'); 

app.get('/', function(req, res) {
    res.render('pages/three', {
        tagline: 'Page Three'
    })
})

var memberAPI = express.Router();

memberAPI.get('/', function(req, res) {
    res.send('Member page!');
});

memberAPI.get('/profile', function (req, res) {
    res.send('Member profile page!');
}); 

memberAPI.get('/changepassword', function (req, res) {
    res.send('Member change password page!');
}); 

var adminAPI = express.Router();

adminAPI.get('/', function(req, res) {
    res.send('Admin page!');
}); 

app.use('/api/member', memberAPI);
app.use('/api/admin', adminAPI);

app.use(express.static('public'));

app.listen(8080, function() {
    console.log('Server listening on port 8080');
});