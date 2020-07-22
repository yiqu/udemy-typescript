"use strict";
/**
 * Class
 */
var Department = /** @class */ (function () {
    function Department(dname) {
        this.name = dname;
    }
    Department.prototype.describe = function (prefix) {
        return prefix + " This is " + this.name;
    };
    return Department;
}());
var d1 = new Department("Engineering");
//console.log(d1, d1.describe("Hi, "));
var d1copy = { describe: d1.describe };
//console.log(d1copy.describe("Hi, ")); //This is undefined. because d1copy did not initalize with name
// the keyword 'this' refers to the thing that called the method, or the thing infront of
// the .describe()
// We can add a type safetly by giving the describe method a this param
var Department2 = /** @class */ (function () {
    function Department2(dname) {
        this.name = dname;
    }
    Department2.prototype.describe = function (prefix) {
        return prefix + " This is " + this.name;
    };
    return Department2;
}());
var d2 = new Department2("Accounting");
//console.log(d2, d2.describe("Hello"));
var d2copy = { describe: d2.describe };
//d2copy.describe(); // now this will throw error because it requries an instance of Department2
var d2copyBetter = { name: "HR", describe: d2.describe };
//console.log(d2copyBetter.describe("Hello there, ")); // now this works because it now has a name proprty and it is valid for a Department object
