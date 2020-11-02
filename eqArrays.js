

const eqArrays = function(arr1, arr2) {

  // console.log('------------------ \r\n');
  // console.log('RECEIVED\r\narray1 is: ' + arr1 + '\r\n' + 'array2 is: ' + arr2 + '\r\n');

  //console.log('arr1.length is: ' + arr1.length + '\r\n' + 'arr2.length is: ' + arr2.length + '\r\n');


  // comparision of lengths of arr1 and arr2
  if (arr1.length === arr2.length) {
    // looping through arr1
    for (let i = 0; i < arr1.length; i++) {

      // console.log('Iteration: ' + i);
      // console.log("arr1: " + arr1[i]);
      // console.log("arr2: " + arr2[i]);

      // checking if the element is subarray
      // console.log('arr1[i] is Array? ' + Array.isArray(arr1[i]));
      // console.log('arr2[i] is Array? ' + Array.isArray(arr2[i]));
      if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {


        // console.log('Comparing arrays arr1[i] and arr2[i]: ' + arr1[i] + ' and ' + arr2[i]);

        // checking if its length is equal
        if (arr1[i].length === arr2[i].length) {
         
          // calling recursive function

          // console.log('[+] RECURSION!');
          // eqArrays(arr1[i], arr2[i]);
        } else {
          // console.log('Arrays are not same size. Hence cant be equal.');
          return false;
        }

      } else {
        // console.log('\r\n[+] Processing elements arr1[i] and arr2[i]: ' + arr1[i] + ' and ' + arr2[i]);
        if (arr1[i] !== arr2[i]) {
          // console.log("ElEMENTS DON'T MATCH\r\n");
          return false;
        } else {
          // console.log('ELEMENTS MATCH\r\n');
        }

      }
    }

  }
  return true;
};
module.exports = eqArrays;

// //  eqArrays([1, 2, 3], [1, 2, 3])
// // eqArrays([1, 2, 3], [3, 2, 1])
// // assertEqual("Lighthouse Labs", "Bootcamp");
// // assertEqual(1, 1);
// // console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// //console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]))
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
// // console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]));

