"use strict";
// optional chaining TS v3.7+
var _a;
const myCoolVar = {
    first: {
        last: " last "
    }
};
let fullname = (_a = myCoolVar === null || myCoolVar === void 0 ? void 0 : myCoolVar.first) === null || _a === void 0 ? void 0 : _a.last; // will be undfined if any of the prop is null or undefined
// nullish coalescing. This stops unintended behavior from 0, NaN and "" being treated as falsy values.
// Using NULLISH COALESCING
let fullname2 = myCoolVar !== null && myCoolVar !== void 0 ? myCoolVar : console.log("NO name"); // if null or undefined, then go to log
// OLD WAY, could be buggy
let fullname3 = myCoolVar || "None"; // if myCoolVar is falsy, then it would go to none, which could be a bug
