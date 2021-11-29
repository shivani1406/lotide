// const eqArrays = function (actual, expected){
//   let test;
//   if(actual.length == expected.length)
//   {
//     for(let i = 0, j=0; i < actual.length, j<expected.length; i++, j++){
//       if(actual[i] === expected[j])
//       {
//         test = true;
//       }
//       else
//       {
//         test = false;
//         break;
//       }
//     }
//   }
//   else
//   {
//     test = false;
//   }
// return test;

// }
const eqArrays = require('./eqArrays');

// const assertArraysEqual = function (actual, expected){
  
//   const result = eqArrays(actual,expected);
//   if(result)
//   {
//     console.log(`✅ Assertion Passed: ${actual} = ${expected}`);
//   }
//   else
//   {
//     console.log(`🛑 Assertion Failed: ${actual} != ${expected}`);
//   }

// }
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  //...
  let midarray = [];
if(array.length >= 3)
{
let count = array.length;
let half = Math.ceil(count/2);
if(count % 2 == 0)
{
for(let i=half-1; i<=half; i++)
{
  midarray.push(array[i]);
}
}
else{
midarray.push(array[half-1]);
}
}
return midarray;
}

module.exports = middle;
