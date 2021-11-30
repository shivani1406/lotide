const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); 

describe("#", () => {
  it("returns {a:1,b:2} for {b:2,a:1}", () => {
    assert.deepEqual(eqObjects(ab, ba),true);
  });

});