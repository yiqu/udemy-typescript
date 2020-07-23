"use strict";
/**
 * Class
 */
class Department {
    constructor(dname) {
        this.name = dname;
    }
    describe(prefix) {
        return prefix + " This is " + this.name;
    }
}
const d1 = new Department("Engineering");
//console.log(d1, d1.describe("Hi, "));
const d1copy = { describe: d1.describe };
//console.log(d1copy.describe("Hi, ")); //This is undefined. because d1copy did not initalize with name
// the keyword 'this' refers to the thing that called the method, or the thing infront of
// the .describe()
// We can add a type safetly by giving the describe method a this param
class Department2 {
    constructor(dname) {
        this.name = dname;
    }
    describe(prefix) {
        return prefix + " This is " + this.name;
    }
}
const d2 = new Department2("Accounting");
//console.log(d2, d2.describe("Hello"));
const d2copy = { describe: d2.describe };
//d2copy.describe(); // now this will throw error because it requries an instance of Department2
const d2copyBetter = { name: "HR", describe: d2.describe };
//console.log(d2copyBetter.describe("Hello there, ")); // now this works because it now has a name proprty and it is valid for a Department object
