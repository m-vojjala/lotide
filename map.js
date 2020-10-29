

const assertEqualArrays = function (actual,expected) {
  
  if(eqArrays(actual,expected)){
  console.log(`✅✅✅Assertion Passed: ${actual}  ==== $${expected}`);
  return true;
  }else{
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ==== ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

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





const words = ["ground", "control", "to", "major", "tom"];

const map = function(array,callback){
  const results = [];
for(let item of array){
  results.push(callback(item))
}

return  results
}




const results1 = map(words,word => word[0])

const results2 = map(words,word => word[2])


console.log(results2);

assertEqualArrays(map(words,word => word[0]),['g','c','t','m','t'])

assertEqualArrays(map(words,word => word[2]),['o','n','k','m'])