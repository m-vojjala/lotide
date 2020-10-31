const eqObjects = function(obj1,obj2) {
  let keysArray1 = Object.keys(obj1);
  let keysArray2 = Object.keys(obj2);

  //  console.log(keysArray1);
  if (keysArray1.length === keysArray2.length) {
    for (let key of keysArray1) {
      if (obj1[key] instanceof Object || obj2[key] instanceof Object)  {
        return eqObjects(obj1[key],obj2[key]);
      } else
      if (obj1[key] === obj2[key]) {
        return true;
      }
      return false;
    }
  }
  return false;
}


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

assertObjectsEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 },{ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });






