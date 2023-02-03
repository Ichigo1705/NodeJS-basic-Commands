// Express Basics
var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send('This is the home page!!!');
});
app.get('/contact', function(req,res){
    res.send('This is the contact page!!!');
});

app.listen(3000);

//Express Route Parameter Building
var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send('This is the home page!!!');
});
app.get('/contact', function(req,res){
    res.send('This is the contact page!!!');
});
app.get('/profile/:id', function(req, res){
    res.send('This is the Profile regarding ID: ' + req.params.id);
});

app.listen(3000);

//Template Engine
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});
app.get('/contact', function(req,res){
    res.render('contact');
});
app.get('/profile/:name', function(req, res){
    var data = {age:27, job:'Depression', hobbies:['eating', 'drinking', 'training']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);

//Serving MiddleWare and Static files
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
    res.render('index');
});
app.get('/contact', function(req,res){
    res.render('contact');
});
app.get('/profile/:name', function(req, res){
    var data = {age:27, job:'Depression', hobbies:['eating', 'drinking', 'training']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);

//Query Strings Application
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
    res.render('index');
});
app.get('/contact', function(req,res){
    console.log(req.query);
    res.render('contact', {qr: req.query});
});
app.get('/profile/:name', function(req, res){
    var data = {age:27, job:'Depression', hobbies:['eating', 'drinking', 'training']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);

//Handling POST Requests
//Run npm install body-parser -save
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
    res.render('index');
});
app.get('/contact', function(req,res){
    console.log(req.query);
    res.render('contact', {qr: req.query});
});
app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data:req.body}); // Create a contact-success.ejs view file and pass "data" to be displayed
})
app.get('/profile/:name', function(req, res){
    var data = {age:27, job:'Depression', hobbies:['eating', 'drinking', 'training']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);