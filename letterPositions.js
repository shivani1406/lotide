const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let key=0; key<sentence.length; key++)
  {
    let arr=[];
    let str="";
    str=sentence[key];
    if(results[str])
    {
      //console.log(results[str]);
     results[str].push(key);
    }
     else
     {
      arr.push(key);
      results[str] = arr;
     }
     
    // }
    
  }
  console.log(results);
  return results;
};
module.exports = letterPositions;

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
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
// assertArraysEqual(letterPositions("hello world").e, [1]);