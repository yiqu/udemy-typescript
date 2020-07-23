"use strict";
/**
 * Interfaces in TS
 *
 * Interfaces can not have initalized values.
 * Interfaces can extends more interfaces
 */
class AudiCar {
    constructor(wc, mpg, modelName) {
        this.wheelCount = [1, 3];
        this.mpg = mpg;
        this.modelNmae = modelName;
        this.passengerCount = 4;
    }
    startUp() {
        console.log("Starting up");
    }
    getPassengerCount() {
        return this.passengerCount;
    }
    someMethod(c) {
    }
}
const adding = (num1, num2) => {
    return num1 + num2;
};
adding(4, 5);
let addingFunc = (k, l) => {
    return k + l;
};
addingFunc(1, 2);
