
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ==== ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

const eqArrays = function (arr1, arr2) {
  let isEqual = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        return console.log(!isEqual);
      }
    }
  }
  return isEqual;
}



const assertEqualArrays = function (arr1, arr2) {
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


const middle = function (arr) {
  let middleEl = Math.floor(arr.length / 2);
  let newArr = [];

  // console.log(middleEl);
  // console.log(arr[middleEl]);

  if (arr.length === 1 || arr.length === 2) {
    return newArr;

  } else if (arr.length % 2 === 0) {
    newArr.push(arr[middleEl - 1], arr[middleEl]);

  } else {
    newArr.push(arr[middleEl]);
  }

  return newArr;
}


