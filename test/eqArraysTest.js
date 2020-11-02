const eqArrays = require('../eqArrays')

const assertEqual =  require('../assertEqual')

console.log(eqArrays([1, 2, 3], [1, 2, 3]))
eqArrays([1, 2, 3], [3, 2, 1])



console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));