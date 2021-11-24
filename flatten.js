const eqArrays = function (actual, expected){
  let test;
  for(let i = 0, j=0; i < actual.length, j<expected.length; i++, j++){
    if(actual[i] === expected[j])
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
    console.log(`Assertion Passed: ${actual} = ${expected}`);
  }
  else
  {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }

}

const flatten = function(arr){
let newarr=[];

for (let i=0; i<arr.length; i++)
{
  if(Array.isArray(arr[i]) !== true)
  {
    newarr.push(arr[i]);
  }
  else{
    for( let j=0 ; j<arr[i].length; j++)
    {
      newarr.push(arr[i][j]);
    }
  }
}
console.log(newarr);
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
