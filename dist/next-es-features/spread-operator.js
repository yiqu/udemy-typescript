"use strict";
/**
 * Spread operators
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Using spread with arrays
var myHobbies = ["Soccer", "Basketball", "Football"];
var myNewHobbies = [];
// ["Soccer", "Basketball", "Football", "Hiking"]
myNewHobbies.push.apply(myNewHobbies, __spreadArrays(myHobbies, ["Hiking"]));
// Using spread with Objects
var newPerson = {
    name: "Kevin",
    age: 30
};
//{name: "Kevin", age: 30, location: "Earth"}
var copiedPerson = __assign(__assign({}, newPerson), { location: "Earth" });
//{name: "Kevin", age: 40}
var copiedPerson2 = __assign(__assign({}, newPerson), { age: 40 });
