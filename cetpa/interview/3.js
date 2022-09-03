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