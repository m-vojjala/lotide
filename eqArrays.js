const assertEqual = require('./assertEqual')


const eqArrays = function(arr1, arr2) {

 
  if (arr1.length === arr2.length) {
  
    for (let i = 0; i < arr1.length; i++) {

      if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {


        if (arr1[i].length === arr2[i].length) {
          
        } else {
          ;
          return false;
        }

      } else {
        
        if (arr1[i] !== arr2[i]) {
         
          return false;
        } else {
         
        }

      }
    }

  }
  return true;
};

module.exports = eqArrays;


  console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3])))
   eqArrays([1, 2, 3], [3, 2, 1])

