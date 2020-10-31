const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)}  ==== $${inspect(expected)}`);
    return true;
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)}  !==  ${inspect(expected)}`);
  }
};


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
};




console.log(assertObjectsEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);
