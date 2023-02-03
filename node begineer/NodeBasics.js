setTimeout(function(){
    console.log("3 seconds have passed!!");
}, 3000); // This function is used to set a Timeout/delay on a particular function or command we want

var time = 0;
setInterval(function(){
    time += 2;
    console.log(time + " seconds have passed!!");
}, 2000); // This function is used to perform an action after an Interval, may be fixed or variable

var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log(time + " seconds have passed!!");
    if(time>5){
        clearInterval(timer);
    }
}, 2000); // Here we have used the function clear Interval to stop the recursion after a particular condition

console.log(__dirname); // This is used to print the working directory

console.log(__filename); // This is used to print the working file

//Normal function statement
function sayhi(){
    console.log("Hi");
}

sayhi();

//Function Expression
var saybye = function(){
    console.log("Bye");
}

saybye();

//Calling a Function expression as an object to a function
function CallFunction(fun){
    fun();
}

CallFunction(saybye);

//Importing modules and Functions from other .js files
var counter = require('./count');
counter(['1', '2', '3']);

//Module Patterning and Importing various methods from a module
var stuff = require('./stuff');
stuff.counter(['1', '2', '3']);
console.log(stuff.adder(1, 2));
console.log(stuff.pi);

//Event Emitter Method
var events = require('events');

var myvar = new events.EventEmitter();
myvar.on('SomeThing', function(mssg){
    console.log(mssg);
});

myvar.emit('SomeThing', "Hello World");

//Example Of Event Emitter and Dialogue Deployment
var events = require('events');
var utils = require('util');

var Person = function(name){
    this.name = name;
};

utils.inherits(Person, events.EventEmitter);

var Ana = new Person('Ana');
var Dada = new Person('Dada');
var Mike = new Person('Mike');

People = [Ana, Dada, Mike];

People.forEach(function(person){
    person.on('Speak',function(mssg){
        console.log(person.name + " said: " + mssg);
    });
});

setTimeout(function(){
    Ana.emit('Speak', 'Who is Gamora?');
}, 3000);
setTimeout(function(){
    Dada.emit('Speak', 'Why is Gamora?');
}, 6000);
setTimeout(function(){
    Mike.emit('Speak', 'What is Gamora?');
}, 9000);

//Reading and Writing files in NodeJS
var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt', 'utf8'); //Sychronous reading of files
console.log(readMe);
var writeMe = fs.writeFileSync('writeMe.txt', readMe); //Synchronous writing of files

fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data);
}); //Asynchronous reading of files

fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFileSync('writeMe.txt', data);
}); //Asynchronous writing of files

fs.unlinkSync('readMe.txt'); //Deleting files

//Creating and Removing Directories
var fs = require('fs');

fs.mkdirSync('stuff'); //Synchronous cration of a directory
fs.rmdirSync('stuff'); //Synchronous removal of directories iff empty