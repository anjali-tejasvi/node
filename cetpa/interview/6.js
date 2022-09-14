//6.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

function fun(str){
    var arr = str.split(" ");
    console.log(arr)
    let longest = 0;
    let longest_word = null;
    for(var x=0; x<arr.length; x++){
        if(longest < arr[x].length){
            longest = arr[x].length;
            console.log(longest)
            longest_word = arr[x];
            console.log(longest_word)
        }
    }
    console.log("Output: ",longest_word)
}

fun(" string in order to store the resulted longest ");