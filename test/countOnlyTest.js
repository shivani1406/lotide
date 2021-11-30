const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  

describe("#countOny", () => {
  it("returns 1 for [Jason]", () => {
    assert.deepEqual(result1["Jason"], 1);
  });

});