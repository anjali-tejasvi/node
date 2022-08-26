//Blocking and Non-Blocking Code

//Syncronous --> blocking
//Asyncronous -->Non- blocking
// --Line by line execution is not guaranteed 
// --callbacks will fire
//node js work on  non-blocking I/O model

const fs = require("fs");
let text = fs.readFile("../file.txt", "utf-8", (err,data)=>{
    // console.log(err,data);
    console.log(data);
    console.log("WithIn Callback text :- ", text);
})

console.log("This is a message");
console.log("Output :- ",text);