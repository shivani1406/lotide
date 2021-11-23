
const eqArrays = function (actual, expected){
  const result = JSON.stringify(actual) == JSON.stringify(expected);
const arr1 = actual;
const arr2 = expected;
return (result); 
}

const assertArraysEqual = function (result){
  // console.log(result);
  if(result)
  {
    console.log(`Assertion Passed:`);
  }
  else
  {
    console.log(`Assertion Failed:`);
  }

}

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]) )// => true
