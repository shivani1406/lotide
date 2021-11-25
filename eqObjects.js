const assertEqual = function(actual, expected) {
  if(actual == expected)
  {
    console.log(`Assertion Passed: ${actual} = ${expected}`);
  }
  else
  {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
  //console.assert((actual===expected) ,"Lighthouse Labs != Bootcamp");
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
    // return result;
}
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
let val="";

if(Object.keys(object1).length !== Object.keys(object2).length)
{
  return false;
}
else{
  let check;
for(let i of Object.keys(object1))
{
  check = false;
  if(Array.isArray(object1[i]) && Array.isArray(object2[i]))
  {
    check = eqArrays(object1[i],object2[i]);
  }
   else if(object1[i] === object2[i])
    {
      //console.log(object1[i]);
      check = true
    }
}
  return check;
}
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false