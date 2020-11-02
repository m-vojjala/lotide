const { Console } = require("console");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ==== ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
  }

};



const findKey = function(obj,callback){
// let valuesArray = Object.values(obj);
// console.log(valuesArray)
for(let key in obj){
  // console.log(callback(obj[key]))
   if(callback(obj[key])){
   return key;
   }
}
return key

}



module.exports = findKey;