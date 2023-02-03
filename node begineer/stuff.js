//Different Ways of referencing module objects
var counter = function(arr){
    console.log("There are " + arr.length + " elements in the array");
};

var adder = function(a, b){
    return `The sum of the numers is ${a+b}`;
}

var pi = 3.142;

module.exports.counter=counter;
module.exports.adder=adder;
module.exports.pi=pi;

//OR//

module.exports.counter = function(arr){
    console.log("There are " + arr.length + " elements in the array");
};

module.exports.adder = function(a, b){
    return `The sum of the numers is ${a+b}`;
}

module.exports.pi = 3.142;

//OR//

var counter = function(arr){
    console.log("There are " + arr.length + " elements in the array");
};

var adder = function(a, b){
    return `The sum of the numers is ${a+b}`;
}

var pi = 3.142;

module.exports = {
    counter:counter,
    adder:adder,
    pi:pi
};