/**
 * Interfaces in TS
 * 
 * Interfaces can not have initalized values.
 * Interfaces can extends more interfaces
 */

 interface Driveable {
   wheelCount: number;
   mpg: number;
   modelNmae: string;
   radio?: boolean;
 }

 interface ICar extends Driveable {
   passengerCount: number;
 }

 class AudiCar implements ICar, Driveable {
  wheelCount: number;
  mpg: number;
  modelNmae: string;
  
  passengerCount: number;

   constructor(wc: number, mpg: number, modelName: string) {
    this.wheelCount = wc;
    this.mpg = mpg;
    this.modelNmae = modelName;
    this.passengerCount = 4;
   }
 }