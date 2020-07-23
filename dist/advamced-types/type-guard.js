"use strict";
function printSomeInfo(p) {
    p.name; // allowed;
    //p.backNumber // doesnt work
    // use type guard
    if ('backNumber' in p) {
        p.backNumber; // TS knows this is a Soccer Plyaer
    }
    if ('college' in p) {
        p.college; // TS knows this is a football player
    }
    // Type assertion  something as ...
    if (p.backNumber) {
        p.backNumber;
    }
    // Type casting <Something>stuff
    if (p.backNumber) {
        p.backNumber;
    }
}
