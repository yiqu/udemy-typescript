/**
 * Interfaces in TS
 * 
 * Interfaces can not have initalized values.
 * Interfaces can extends more interfaces
 */

 interface Driveable {
   wheelCount: [number, number];
   mpg: number;
   modelNmae: string;
   radio?: boolean;
   someMethod(param: boolean): void;
 }

 interface ICar extends Driveable {
   passengerCount: number;

   startUp(): void;
   getPassengerCount(): number;
 }

 class AudiCar implements ICar, Driveable {
  wheelCount: [number, number];
  mpg: number;
  modelNmae: string;
  
  passengerCount: number;

   constructor(wc: number, mpg: number, modelName: string) {
    this.wheelCount = [1,3];
    this.mpg = mpg;
    this.modelNmae = modelName;
    this.passengerCount = 4;
   }

   startUp() {
     console.log("Starting up")
   }

   getPassengerCount() {
     return this.passengerCount;
   }

   someMethod(c: boolean) {
   }
 }

 /**
  * Interface as function type
  */
 interface addFn {
   (n1: number, n2: number): number
 }

 const adding: addFn = (num1, num2) => {
   return num1 + num2;
 }

 adding(4,5);

 type AddedFn = (n1: number, n2: number) => number;

 let addingFunc: AddedFn = (k: number, l: number) => {
   return k + l;
 }

 addingFunc(1,2);