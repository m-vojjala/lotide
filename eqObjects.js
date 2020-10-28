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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
