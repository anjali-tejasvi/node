//file system
const fs = require('fs')

//create file
//appendFile("file_name","content of the file", ()=>{})

fs.appendFile("crud_demo.txt", `()=>{
    console.log("i am Arrowfunction")
}`,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file created sucessfully")
    }
    }
)

//read the file
// fs.readFile("file_name",(err,data)=>{

// })

fs.readFile("crud_demo.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

//update file
//appendFile("file_name","content of the file", ()=>{})

fs.appendFile("crud_demo.txt", `
const functionName=()=>{
    console.log("I am updated arrow function");
}`,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Updated file")
    }
})

//delete file
//fs.unlink("file_name", ()=>{})

// fs.unlink("demo.js",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file deleted")
//     }
// })