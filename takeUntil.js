

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




const assertEqualArrays = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual}  === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
  }
}; const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {

    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertEqualArrays(takeUntil(data1, x => x < 0), [1, 2, 2, 5, 6]);