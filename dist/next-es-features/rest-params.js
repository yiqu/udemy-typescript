"use strict";
/**
 * Rest Parameters  function(...stuff) lets you have unlimited params
 * It merges all params into an array
 */
const sportsList = (...sports) => {
    console.log(sports, sports.length);
};
//["Soccer", "Basektball", "Baseball"] 3
//sportsList("Soccer", "Basektball", "Baseball");
/**
 * an Add function with rest params
 * @param numz
 */
const addWithUnlimitedParams = (...numz) => {
    return numz.reduce((result, currVal) => {
        return result + currVal;
    }, 0);
};
//console.log(addWithUnlimitedParams(1,2,3)); //6
