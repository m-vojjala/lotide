const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ==== ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

const findKeyByValue = function(givenObject, value) {
  for (let key in givenObject) {
    // console.log(key);
    // console.log(givenObject[key])
    if (givenObject[key] === value) {
      return key;
    }

  }
};

module.exports = findKeyByValue