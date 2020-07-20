"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printRes(n1) {
    console.log(n1);
}
// ENsures this type takes a function
var combineVal;
// add() is a function, WORKS.
combineVal = add;
console.log(combineVal(3, 4));
//combineVal = 5; // ERROR, 5 is not a function
combineVal = printRes;
console.log(combineVal(3, 4)); // prints 3
// Ensures this type takes a function that returns a number
var betterCombineVal;
// betterCombineVal = add; // ERROR, it takes no parameters, but add() has 2 params
// Ensures this type takes a function with 2 params and return a number
var betterCombineVal2;
betterCombineVal2 = add;
//betterCombineVal2 = printRes // ERROR
console.log(betterCombineVal2(5, 5));
