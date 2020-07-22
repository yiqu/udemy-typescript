/**
 * Static methods and properties
 */

class Laptop {

  static dateBought: number = 2020;

  static makeNoise(noise: string) {
    return "Laptop is making " + noise;
  }

}

const lapnoise1 = Laptop.makeNoise("Brrrr");
const datebought = Laptop.dateBought;
Laptop.dateBought = 201;
//console.log(lapnoise1); //Laptop is making Brrrr
//console.log(Laptop.dateBought) //201

