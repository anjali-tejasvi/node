console.log("first");

//Syncronous and Asyncronous code 


//syncronous code 

let fs = require("fs");

let data = fs.readFile("file.txt", function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
console.log("anjali");

