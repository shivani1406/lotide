const letterPositions = require('../letterPositions');
const assert = require('chai').assert;


describe("#letterPosition", () => {
  it("returns [1] for hello world", () => {
    assert.deepEqual(letterPositions("hello world").e, [1]);
  });

});


