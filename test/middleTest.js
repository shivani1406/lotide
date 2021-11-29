
const middle = require('../middle');

// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [1, 2, 3, 4, 5] for ['3']", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });
});