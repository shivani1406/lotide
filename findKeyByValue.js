// const assertEqual = function(actual, expected) {
//   if(actual == expected)
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
const findKeyByValue = function(obj,val){
let key="";
let result;
for(let keys in obj)
{
  key=obj[keys];
  // console.log(key);
  if(key === val)
  {
    result = keys;
    break;
  }
}
return result;
}
module.exports = findKeyByValue;

