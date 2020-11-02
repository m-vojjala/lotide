const assertEqualArrays = function(arr1, arr2) {
  let isEqual = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        return console.log("Arrays are equal: " + !isEqual);
      }
    }
  }
  return console.log("Arrays are equal: " + isEqual);
};


const eqArrays = function(arr1, arr2) {
  let isEqual = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        return !isEqual;
      }
    }
  }
  return isEqual;
};


const flatten = function(arr) {
  let finalArray = [];
  for (let i = 0; i < arr.length; i++) {

    // console.log(arr[i] + ' is ' + Array.isArray(arr[i]));

    if (!Array.isArray(arr[i])) {
      finalArray.push(arr[i]);
    } else {
      //  console.log('Looks like ' + arr[i] + ' is an array.');
      let temp = arr[i];
      for (let j = 0; j < temp.length; j++) {
        finalArray.push(temp[j]);
      }
    }

    // console.log('Final array: ' + finalArray);
  }
  return finalArray;
};


module.exports =flatten;