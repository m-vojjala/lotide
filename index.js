const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual  = require('./assertObjectsEqual')
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const flatten = require('./flatten');
const findKey = require('./findkey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');




module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  eqObjects,
  assertObjectsEqual,
  countOnly,
  countLetters,
  flatten,
  findKey,
  findKeyByValue,
  letterPositions
};