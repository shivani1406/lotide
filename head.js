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

const head = function(arr) {
  return arr[0];
}


module.exports = head;