var counter = function(arr){
    console.log("There are " + arr.length + " elements in the array");
};

counter(['1', '2', '3']);

//Making The function known for export and use under the module
module.exports = counter