/**
 * Function overloading.
 * 
 * Give the same function different signatures that would return a specific type
 */



function getBedTime(location: number, time: number): number;

function getBedTime(location: string, time: string): string;

function getBedTime(location: StringNumber, time: StringNumber) {
  if (typeof location === "string" || typeof time ==="string") {
    return location.toString() + location.toString();
  }
  return time + time;
}
//function getBedTime(location: number, time: number): boolean; // ERROR, TS knows StringNumber would never be boolean



type StringNumber = string | number;


getBedTime(1, 2); //  TS knows its a number
getBedTime("MD", "9:30"); // TS knows its a string