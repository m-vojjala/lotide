const eqArrays = function (arr1, arr2) {
  let isEqual = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
         return console.log("Arrays are equal: " + !isEqual);
      }
    }
  }
  return console.log("Arrays are equal: " + isEqual);
}



eqArrays([1, 2, 3], [1, 4, 3])