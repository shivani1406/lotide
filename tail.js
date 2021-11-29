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
const tail = function(arr)
{
  let i = 0;
  const arr2 = [];
  if(arr.length > 1)
  {
    for(var j=0; j < arr.length-1; j++)
    {
      i += 1;
      arr2[j] = arr[i];
    }
  }
  else
  {
    return arr[0];
  }
    
    
  //console.log(arr2);
  return arr2;
}



module.exports = tail;