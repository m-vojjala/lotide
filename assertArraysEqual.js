
const eqArrays = require('./eqArrays');


const assertEqualArrays = function(actual,expected) {
  
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ==== $${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

console.log(assertEqualArrays(eqArrays([1, 2, 3], [1, 2, 3])),true)
eqArrays([1, 2, 3], [3, 2, 1])



module.exports = assertEqualArrays;