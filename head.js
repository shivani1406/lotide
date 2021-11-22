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

const head = function(arr){
  return (arr[0]);
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 2);