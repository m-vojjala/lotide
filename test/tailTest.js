

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail',()=>{
it('should return [3,5] in [1,3,5]',()=>{
  assert.deepEqual(tail([1, 3, 5]),[ 3, 5 ])
})
})