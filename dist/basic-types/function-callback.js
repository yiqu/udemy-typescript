"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2) {
    return n1 + n2;
}
function printRes(n1) {
    console.log(n1);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(4, 5, (num) => { console.log(num + " logged"); });
