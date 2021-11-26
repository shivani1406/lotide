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
  
  const result = eqArrays(actual,expected);
  if(result)
  {
    console.log(`✅ Assertion Passed: ${actual} = ${expected}`);
  }
  else
  {
    console.log(`🛑 Assertion Failed: ${actual} != ${expected}`);
  }

}
const takeUntil = function(array, callback) {
  // ...
  const results = [];
  for (let item of array) {
    if(!callback(item)){
      results.push(item);
    }
    else
    {
      break;
    }
    
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);