const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let key in sentence)
  {
    let arr=[];
    let str="";
    str=sentence[key];
    if(results[str])
    {
     arr.push(key);
    }
     else
     {
      arr.push(key);
     }
     results[str] = arr;
    // }
    
  }
  console.log(results);
  return results;
};

const eqArrays = function (actual, expected){
  let test;
  for(let i = 0, j=0; i < actual.length, j<expected.length; i++, j++){
    if(actual[i] == expected[j])
    {
      test = true;
    }
    else
    {
      test = false;
    }
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

assertArraysEqual(letterPositions("hello").e, [1]);