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

const findKey = function(obj,callback){
  let key="";
let result;
for(let keys in obj)
{
  key=obj[keys];
  // console.log(key);
  if(callback(key))
  {
    result = keys;
    break;
  }
}
//console.log(result);
return result;
}

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(result1,"noma");