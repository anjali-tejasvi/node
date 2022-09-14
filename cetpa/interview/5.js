//5.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function fun(str){

    var arr = str.split(' ')
    console.log(arr)
    var NewArr =[];
    for(var x = 0; x<arr.length; x++){
        NewArr.push(arr[x].charAt(0).toUpperCase() + arr[x].slice(1))
    }
    var output = NewArr.join(' ');
    console.log(output)
}

fun("apple is red")