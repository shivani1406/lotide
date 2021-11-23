const eqArrays = function (actual, expected){
  let test;
  for(let i = 0, j=0; i < actual.length, j<expected.length; i++, j++){
    if(actual[i] === expected[j])
    {
      test = true;
    }
    else
    {
      test = false;
    }
  }
  
return test;

}

const assertArraysEqual = function (actual, expected){
  
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

const without = function(original, remove){
  let newarr = [];
  for(let i = 0; i < original.length; i++)
  {
    if(original[i] != remove)
    {
      newarr.push(original[i]);
    }
  }
  console.log(newarr);
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);