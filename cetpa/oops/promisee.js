
const count = true;

let CountVal =  new Promise(function(res,rej){
    if(count){
        res("Count value is true");
    }
    else{
        rej("There is no count value");
    }
})
console.log(CountVal)