"use strict";
function addz(n1, n2) {
    return n1 + n2;
}
function printResz(n1) {
    console.log(n1);
}
function plus42(n1) {
    return n1 + 42;
}
var ftype = function (numToPrint) {
    return numToPrint;
};
var gg = ftype(5);
console.log(gg);
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(4, 5, function (num) { console.log(num + "HI"); });
addAndHandle(4, 5, printResz);
function addAndHandle2(n1, n2, cb) {
    var result = n1 + n2;
    var r = cb(result);
    console.log(r);
}
addAndHandle2(1, 1, plus42);
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
var jj = sendRequest('Send this!', function (response) {
    console.log(response);
    return true;
});
console.log(jj);
