"use strict";
/**
 * Spread operators
 */
// Using spread with arrays
const myHobbies = ["Soccer", "Basketball", "Football"];
const myNewHobbies = [];
// ["Soccer", "Basketball", "Football", "Hiking"]
myNewHobbies.push(...myHobbies, "Hiking");
// Using spread with Objects
const newPerson = {
    name: "Kevin",
    age: 30
};
//{name: "Kevin", age: 30, location: "Earth"}
const copiedPerson = Object.assign(Object.assign({}, newPerson), { location: "Earth" });
//{name: "Kevin", age: 40}
const copiedPerson2 = Object.assign(Object.assign({}, newPerson), { age: 40 });
