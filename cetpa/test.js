const { log } = require('console');
const https = require('https');
https.createServer((req,res)=>{

}).listen(3000, ()=>{
    console.log("Server is running");
})

// progress bar start
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', {total:10});
const timer = setInterval(() =>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100)
