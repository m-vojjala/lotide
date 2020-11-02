const assertEqual = require('./assertEqual');

const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;

// console.log(tail([1,3,5]))