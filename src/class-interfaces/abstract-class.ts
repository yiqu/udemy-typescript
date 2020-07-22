/**
 * Absract class - provide methods but not definitions
 */

abstract class Mouse {
  abstract makeNoise(): string;
}

class BlueMouse extends Mouse {
  makeNoise() {
    return "I am blue!!";
  }
}

//const m1 = new Mouse(); // ERROR cant institant abstract class
const m2 = new BlueMouse();
let nn = m2.makeNoise();
//console.log(nn) //I am blue!!
