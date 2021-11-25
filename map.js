const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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

const results1 = map(words, word => word[0]);

assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
// console.log(results1);


