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



//  eqArrays([1, 2, 3], [1, 2, 3])
// eqArrays([1, 2, 3], [3, 2, 1])
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


