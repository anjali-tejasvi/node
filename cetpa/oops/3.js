//1. Write a JavaScript function that reverse a number.
/*function reverseBuber(num) {
    let rev = 0;
    while (num != 0) {
      lastDigit = num % 10;
      rev = rev * 10 + lastDigit;
      num = Math.floor(num / 10);
    }
    console.log("Reverse number : " + rev);
  }
  reverseBuber(123); */

  // 2.program to check if the string is palindrome or not

/*function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
        return "It is not a palindrome";
      }
    }
    return "It is a palindrome";
  }
  const value = checkPalindrome("level");
  
  console.log(value);*/
  
//3.Write a JavaScript function that generates all combinations of a string.
function combString(str) {
    var lenStr = str.length;
    var result = [];
    var indexCurrent = 0;
  
    while (indexCurrent < lenStr) {
      var char = str.charAt(indexCurrent);
      var x;
      var arrTemp = [char];
  
      for (x in result) {
        arrTemp.push("" + result[x] + char);
      }
      result = result.concat(arrTemp);
  
      indexCurrent++;
    }
  
    return result;
  }
  
  console.log(combString("abc"));
  //4.Write a JavaScript function that returns a passed string with letters in alphabetical order.
function alphabet_order(str) {
    return str.split("").sort().join("");
  }
  console.log(alphabet_order("webmaster"));
  
  //5.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
  function uppercase(str) {
    var array1 = str.split(" ");
    var newarray1 = [];
  
    for (var x = 0; x < array1.length; x++) {
newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(" ");
  }
  console.log(uppercase("the quick brown fox"));