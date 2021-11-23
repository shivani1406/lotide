// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected)
  {
    console.log(`Assertion Passed: ${actual} = ${expected}`);
  }
  else
  {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
  //console.assert((actual===expected) ,"Lighthouse Labs != Bootcamp");
};

const eqArrays = function (actual, expected){
  // let arr1="";
  // let arr2="";
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
  // if(test)
  // {
  //   console.log(`Assertion Passed: ${actual} = ${expected}`);
  // }
  // else
  // {
  //   console.log(`Assertion Failed: ${actual} != ${expected}`);
  // }
return test;
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true); // => should FAIL