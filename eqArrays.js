// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if(actual === expected)
//   {
//     console.log(`Assertion Passed: ${actual} = ${expected}`);
//   }
//   else
//   {
//     console.log(`Assertion Failed: ${actual} != ${expected}`);
//   }
//   //console.assert((actual===expected) ,"Lighthouse Labs != Bootcamp");
// };

const assertEqual = require('./assertEqual');

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
 // console.log(test);
return test;

}

module.exports = eqArrays;

