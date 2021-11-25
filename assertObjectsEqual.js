// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  const result = eqObjects(actual,expected);
  console.log(`Example label: `,result);
  if(result)
  {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} = ${inspect(expected)}`);
  }
  else
  {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`);
  }
  
};

const eqArrays = function (actual, expected){
  
  let test;
  for(let i = 0, j=0; i < actual.length, j<expected.length; i++, j++){
    if(actual[i] == expected[j])
    {
      test = true;
    }
    else
    {
      test = false;
    }
  }
    return test;
    // return result;
}
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
let val="";

if(Object.keys(object1).length !== Object.keys(object2).length)
{
  return false;
}
else{
  let check;
for(let i of Object.keys(object1))
{
  check = false;
  if(Array.isArray(object1[i]) && Array.isArray(object2[i]))
  {
    check = eqArrays(object1[i],object2[i]);
  }
   else if(object1[i] === object2[i])
    {
      //console.log(object1[i]);
      check = true
    }
}
  return check;
}
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true