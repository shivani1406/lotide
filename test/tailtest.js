const tail = require('../tail');
const assertEqual = require('../assertEqual');

//TestCode
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result, "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");