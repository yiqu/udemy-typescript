"use strict";
/**
 * Static methods and properties
 */
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    Laptop.makeNoise = function (noise) {
        return "Laptop is making " + noise;
    };
    Laptop.dateBought = 2020;
    return Laptop;
}());
var lapnoise1 = Laptop.makeNoise("Brrrr");
var datebought = Laptop.dateBought;
Laptop.dateBought = 201;
//console.log(lapnoise1); //Laptop is making Brrrr
//console.log(Laptop.dateBought) //201
