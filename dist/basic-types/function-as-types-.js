"use strict";
// ENsures this type takes a function
let combineVal;
//: Function. Function is a type. It could also be written () => T
// add() is a function, WORKS.
combineVal = add;
console.log(combineVal(3, 4));
//combineVal = 5; // ERROR, 5 is not a function
combineVal = printRes;
console.log(combineVal(3, 4)); // prints 3
function add(n1, n2) {
    return n1 + n2;
}
function printRes(n1) {
    console.log(n1);
}
// Ensures this type takes a function that returns a number
let betterCombineVal;
betterCombineVal = function () {
    return 42;
};
// Ensures this type takes a function with 2 params and return a number
let betterCombineVal2;
betterCombineVal2 = add;
//betterCombineVal2 = printRes // ERROR
console.log(betterCombineVal2(5, 5));
