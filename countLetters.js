const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ==== ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
  }

}


const countLetters = function (string) {

  let arr = string.split(" ").join("");
  // console.log(arr);

  let newObj = {};
  for (let char of arr) {

    // console.log(char);

    if (newObj[char]) {
      newObj[char]++;
    } else {
      newObj[char] = 1
    }
  }
  return newObj;
}


console.log(countLetters("lighthouse in the house"));
