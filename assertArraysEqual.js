
const eqArrays = function (actual, expected){
  let test;
  if(actual.length == expected.length)
  {
    for(let i = 0, j=0; i < actual.length, j<expected.length; i++, j++){
      if(actual[i] === expected[j])
      {
        test = true;
      }
      else
      {
        test = false;
        break;
      }
    }
  }
  else
  {
    test = false;
  }
return test;

}

const assertArraysEqual = function (actual, expected){
  // console.log(result);
  const result = eqArrays(actual,expected);
  if(result)
  {
    console.log(`Assertion Passed: ${actual} = ${expected}`);
  }
  else
  {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }

}

assertArraysEqual([1, 2, "3"], [1, 2, 3]) // => true
