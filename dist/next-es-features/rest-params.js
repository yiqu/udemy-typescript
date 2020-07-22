"use strict";
/**
 * Rest Parameters  function(...stuff) lets you have unlimited params
 * It merges all params into an array
 */
var sportsList = function () {
    var sports = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sports[_i] = arguments[_i];
    }
    console.log(sports, sports.length);
};
//["Soccer", "Basektball", "Baseball"] 3
//sportsList("Soccer", "Basektball", "Baseball");
/**
 * an Add function with rest params
 * @param numz
 */
var addWithUnlimitedParams = function () {
    var numz = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numz[_i] = arguments[_i];
    }
    return numz.reduce(function (result, currVal) {
        return result + currVal;
    }, 0);
};
//console.log(addWithUnlimitedParams(1,2,3)); //6
