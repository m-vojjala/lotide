const eqObjects = function(obj1, obj2) {
  let keysArray1 = Object.keys(obj1);
  let keysArray2 = Object.keys(obj2);

  if (keysArray1.length === keysArray2.length) {
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) {
        eqArrays(obj1[key], obj2[key]);
      } else {
        if (obj1[key] === obj2[key]) {
          return true;
        }
      }
    }
  }

  return false;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)}  ==== $${inspect(expected)}`);
    return true;
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)}  !==  ${inspect(expected)}`);
  }
};

const ab = { a: 1, b: 2 };
const ba = { b: 2, a: 1 };

assertObjectsEqual(ab, ba);




