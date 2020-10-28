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
  console.log(typeof newObj)
  return newObj;
}


let result = countLetters("lighthouse in the house");


const countLighthouse = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
console.log(typeof countLighthouse)
assertEqual( result.h,4);
