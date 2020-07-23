/**
 * 
 * Decroators.
 * 
 * Decroators are just functions. They are run when a class is defined. NOT when they are institiaed
 */

function Logger(toLog: string) {
  return function(cons: Function) {
    //console.log(toLog);
  }
}

@Logger("Hello, I am a Decro, log me now")
class MyTable {

  legCount: number = 4;
  color: string;

  constructor(color: string) {
    console.log("Creating table..");
    this.color = color;
  }

  sayHi() {
    console.log("Hi")
  }

}

