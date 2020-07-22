// Section 1 - Core Types
/**
 * 1) String :string
 * 2) Boolean :boolean
 * 3) Number :number
 * 4) Objects :{}
 * 5) Array :string[]
 * 6) Tuple :[number, string]
 * 7) Enums
 * 8) Any
 */

// string
const nameString: string = "I am a string";
let nameString2 = "I am a string"; //inference string

// boolean
const actionBoolean: boolean = true;
let actionBoolean2 = false; //inference boolean

// number
const num: number = 1;
let num2 = 5;

// objects
const myInfo = {
  name: "Kevin",
  age: 30
}

let myInfo2: {
  name: string;
  age: number;
} = {
  name: "Kevin",
  age: 30,
  // address: 1  // ERROR, does not exist on the type
}

// array
const stringInArray: string[] = ["Soocer", "Basketball"];
let stringsInArray: string[];
//stringsInArray = 1; // ERROR, not array
//stringsInArray = ["Hi", 5] // ERROR, array constains different type than stated
stringsInArray = ["Hello"]

// mutiple type Arrays
let multipleTypeArray: (string|number)[];
multipleTypeArray = ["string", 5];

let multipleTypeArray2: (string|number|boolean)[];
multipleTypeArray2 = ["string", 5, false];

// tuple : fixed length array and fixed type. If you want to be really strict.
let tupleArray: [number, string] = [3, "three",];  // fixed length, fixed type
//let tupleArray2: [number, string] = [3, "three", 5];  // ERROR
//let tupleArray3: [number, string] = [3, "three", boolean];  // ERROR

//enums
enum Sport {
  Soccer,  // auto assigned to 0, and increment by 1 for others below (DEFAULT behavior)
  Basketball, //1
  Tennis, //2
  Football //3
}

console.log(Sport.Basketball) // prints out 1
console.log(Sport['Football']) // prints 3
console.log(Sport[0]) // prints Soccer

enum Sport2 {
  Soccer = 2,
  Basketball = "BASKETBALL", 
  Tennis = 5, 
  Football //6
}

console.log(Sport2.Basketball) // prints out 'BASKETBALL'