const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])))
eqArrays([1, 2, 3], [3, 2, 1])

