"use strict";
/**
 * ES 6 JS Features Refresher
 */
/**
 * Const, let keywords
 */
const myNameThatCantBeChanged = "Kevin";
let myNewNameThatCanBeChanged = "Kevin";
// var = only scopred into a function and global
if (2 > 1) {
    var isOld = true;
}
//console.log(isOld); // this works in JS, it will print out isOld
// let is block scoped, i.e. inside if () {}, for loop, or just {}
if (2 > 1) {
    let isOld2 = true;
}
//console.log(isOld2); // this will not work
