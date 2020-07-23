"use strict";
// builtin generics
const namesArr = []; //same as string[]
const gz = 5;
const isItComing = new Promise((resolve, rej) => {
    if (gz > 1) {
        resolve("Good");
    }
    else {
        rej("Error " + rej);
    }
});
isItComing.then((val) => {
}, (rej) => {
    console.log(rej);
});
