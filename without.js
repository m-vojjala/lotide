const assertEqualArrays = function (arr1, arr2) {
  let isEqual = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        return console.log("Arrays are equal: " + !isEqual);
      }
    }
  }
  return console.log("Arrays are equal: " + isEqual);
}


const eqArrays = function (arr1, arr2) {
  let isEqual = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        return !isEqual;
      }
    }
  }
  return isEqual;
}






const without = function (arr, itemToRemove) {

  for (let i = 0; i < arr.length; i++) {


    console.log(`Elements Of array${arr[i]} ${itemToRemove}`);


    if (arr[i] === itemToRemove) {


      arr.splice(i, 1);


    }

  }
  console.log(arr);
  return arr;

}


without([1, 2, 3], 1);

without(["1", "2", "3"], "3")
const words = ["hello", "world", "lighthouse"];
without(words, "lighthouse");

