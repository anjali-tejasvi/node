const express = require('express');
const app = express();
const port = 3000;

app.listen(`${port}`,()=>{
    console.log(`server is running on ${port}`);
    
})

app.get("/",(req,res)=>{
    res.send(`<h1>Wlecome to Home Page</h1>`)
})

app.get("/about",(req,res)=>{
    res.send(` <h1>This is About Section</h1>
    <h5>Hello, I am Anjali Tejasvi.</h5>`)
})



// exports.express(){
//     app.listen(`${port}`,()=>{
//         console.log(`server is running on ${port}`);
        
//     })
    
// }