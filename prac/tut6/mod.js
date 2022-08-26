console.log("This is module");


function average(arr){
    let sum = 0;
    arr.forEach(ele=>{
        sum += ele;
    });

    return sum/arr.length;
}

module.exports = {
    avg: average,
    name: "Teza",
    repo: "Github"
}



