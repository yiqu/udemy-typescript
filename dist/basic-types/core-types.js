"use strict";
// Section 1 - Core Types
/**
 * 1) String :string
 * 2) Boolean :boolean
 * 3) Number :number
 * 4) Objects :{}
 * 5) Array :string[]
 * 6) Tuple :[number, string]
 * 7) Enums
 * 8) Any
 */
// string
const nameString = "I am a string";
let nameString2 = "I am a string"; //inference string
// boolean
const actionBoolean = true;
let actionBoolean2 = false; //inference boolean
// number
const num = 1;
let num2 = 5;
// objects
const myInfo = {
    name: "Kevin",
    age: 30
};
let myInfo2 = {
    name: "Kevin",
    age: 30,
};
// array
const stringInArray = ["Soocer", "Basketball"];
let stringsInArray;
//stringsInArray = 1; // ERROR, not array
//stringsInArray = ["Hi", 5] // ERROR, array constains different type than stated
stringsInArray = ["Hello"];
// mutiple type Arrays
let multipleTypeArray;
multipleTypeArray = ["string", 5];
let multipleTypeArray2;
multipleTypeArray2 = ["string", 5, false];
// tuple : fixed length array and fixed type. If you want to be really strict.
let tupleArray = [3, "three",]; // fixed length, fixed type
//let tupleArray2: [number, string] = [3, "three", 5];  // ERROR
//let tupleArray3: [number, string] = [3, "three", boolean];  // ERROR
//enums
var Sport;
(function (Sport) {
    Sport[Sport["Soccer"] = 0] = "Soccer";
    Sport[Sport["Basketball"] = 1] = "Basketball";
    Sport[Sport["Tennis"] = 2] = "Tennis";
    Sport[Sport["Football"] = 3] = "Football"; //3
})(Sport || (Sport = {}));
console.log(Sport.Basketball); // prints out 1
console.log(Sport['Football']); // prints 3
console.log(Sport[0]); // prints Soccer
var Sport2;
(function (Sport2) {
    Sport2[Sport2["Soccer"] = 2] = "Soccer";
    Sport2["Basketball"] = "BASKETBALL";
    Sport2[Sport2["Tennis"] = 5] = "Tennis";
    Sport2[Sport2["Football"] = 6] = "Football"; //6
})(Sport2 || (Sport2 = {}));
console.log(Sport2.Basketball); // prints out 'BASKETBALL'
// tuple
let ghj;
let hhh = ["Hi"];
ghj = hhh;
