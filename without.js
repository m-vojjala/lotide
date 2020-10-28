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






const without = function (arr, itemsToRemove) {
  let newArray = [];
  let match = false;
  for (let i = 0; i < arr.length; i++) {
    // console.log(`Elements Of array${arr[i]} ${itemToRemove}`);
    for (let item of itemsToRemove) {
      if (arr[i] !== item) {
        newArray.push(arr[i]);
        //  console.log(newArray);
      } else {
        match = true;
      }
    }

  }
  return newArray;

}


console.log(without([1, 2, 3], [1]));

without(["1", "2", "3"], [1, 2, "3"])
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

