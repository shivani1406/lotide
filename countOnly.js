// const assertEqual = function(actual, expected) {
//   if(actual === expected)
//   {
//     console.log(`✅Assertion Passed: ${actual} = ${expected}`);
//   }
//   else
//   {
//     console.log(`🛑Assertion Failed: ${actual} != ${expected}`);
//   }
//   //console.assert((actual===expected) ,"Lighthouse Labs != Bootcamp");
// };

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const assertEqual = require('./assertEqual');
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  let str="";
  for(let items in allItems){
    // console.log(allItems[items]);
    str=allItems[items];
  
    //console.log(itemsToCount[str]);
    if (itemsToCount[str]) { 
      //console.log(results[items]);
      if (results[str]) {
        
        results[str] += 1;
      } else {
        results[str] = 1;
      }
     // console.log(results);
    }
  }
  //console.log(results);
  return results;
}
module.exports = countOnly;
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);