//1. Write a JavaScript function that reverse a number.
function reverseBuber(num) {
    let rev = 0;
    while (num != 0) {
      lastDigit = num % 10;
      rev = rev * 10 + lastDigit;
      num = Math.floor(num / 10);
    }
    console.log("Reverse number : " + rev);
  }
  reverseBuber(123); 