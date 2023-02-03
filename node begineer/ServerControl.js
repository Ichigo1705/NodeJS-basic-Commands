//Starting a Server and Handling Normal Requests
var http = require('http');

var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World');
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');

//Creating Streams and Buffers to pass large data in chunks for easier transfer to the client
var fs = require('fs');

var MyReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

MyReadStream.on('data', function(chunk){
    console.log('New Chunk Received: ');
    myWriteStream.write(chunk);
});

//OR//

MyReadStream.pipe(myWriteStream);

//Example of Sending Information to Clients using Streams
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type':'text/plain'});
    var MyReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    MyReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');

//Serving HTML Files to the user
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type':'text/html'});
    var MyReadStream = fs.createReadStream(__dirname + '/index.html');
    MyReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');

//Serving JSON data to the clients
var http = require('http');

var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type':'application/json'});
    var myObj = {
        name: "Ryu",
        class: "Samurai",
        age: 27
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');

//Basic Routing Method
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    if(req.url === '/home' || req.url === '/' || req.url === ''){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact-us'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/func'){
        res.writeHead(200, {'Content-type':'application/json'});
        var people = [{name:'Ryu', age:20}, {name:'Garm', age:30}];
        res.end(JSON.stringify(people));
    }
    else{
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream((__dirname + '/error.html')).pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');