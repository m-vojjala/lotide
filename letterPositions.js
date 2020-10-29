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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ==== ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

const eqArrays = function(arr1, arr2) {
  let isEqual = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        return console.log(!isEqual);
      }
    }
  }
  return isEqual;
};









const letterPositions = function(sentence) {
  const results = {};

  let indexArray = [];

  let arr = sentence.split("").join("");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {

    // console.log(arr[i])
    console.log('--------------------------');
    console.log('Iteration: ' + i);

    let letter = arr[i];

    if (!results[letter]) {
      indexArray.push(i);


      console.log("indexArray is: " + indexArray);

      let tempArray = [];

      tempArray.push(indexArray[i]);

      console.log("tempArray is: " + tempArray);

      results[letter] = tempArray;

    } else {
      results[letter].push(i);
      indexArray.push(i);
    }

  }

  return results;

};
console.log(letterPositions("hello"));

assertEqualArrays(letterPositions("hello").e, [1]);

