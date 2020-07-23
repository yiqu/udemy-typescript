"use strict";
/**
 * Static methods and properties
 */
class Laptop {
    static makeNoise(noise) {
        return "Laptop is making " + noise;
    }
}
Laptop.dateBought = 2020;
const lapnoise1 = Laptop.makeNoise("Brrrr");
const datebought = Laptop.dateBought;
Laptop.dateBought = 201;
//console.log(lapnoise1); //Laptop is making Brrrr
//console.log(Laptop.dateBought) //201
