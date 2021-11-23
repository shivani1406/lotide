// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected)
  {
    console.log(`Assertion Passed: ${actual} = ${expected}`);
  }
  else
  {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
  //console.assert((actual===expected) ,"Lighthouse Labs != Bootcamp");
};

const tail = function(arr)
{
  let i = 0;
  const arr2 = [];
  
    for(var j=0; j < arr.length-1; j++)
    {
      i += 1;
      arr2[j] = arr[i];
    }
    
  
  return arr2;
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result, "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");