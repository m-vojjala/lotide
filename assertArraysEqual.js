
const eqArrays = function (arr1, arr2) {
  let isEqual = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] === arr2[i]) {
        return isEqual;
      }
    }
  }
  return !isEqual;
}


const assertEqualArrays = function (actual,expected) {
  
  if(eqArrays(actual,expected)){
  console.log(`✅✅✅Assertion Passed: ${actual}  ==== $${expected}`);
  return true;
  }else{
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
  }
};