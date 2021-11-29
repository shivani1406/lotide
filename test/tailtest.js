const tail = require('../tail');
const assertEqual = require('../assertEqual');

//TestCode
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result, "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs");

const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), '5'); 
  });
});