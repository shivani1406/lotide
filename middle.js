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
    console.log(`✅ Assertion Passed: ${actual} = ${expected}`);
  }
  else
  {
    console.log(`🛑 Assertion Failed: ${actual} != ${expected}`);
  }

}

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
return console.log(midarray);
}

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]