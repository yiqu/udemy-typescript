// creating a type alias

type MyCustomSportType = "Soccer" | "Basketball";
let mySport: MyCustomSportType = "Basketball";
// let mySport2: MyCustomSportType = "Football"; // ERROR


type stringNumberType = string | number;
let justNumber: stringNumberType = 3;
// let aBoolean: stringNumberType = false; // ERROR

type User = { name: string; age: number };
const u1: User = { name: 'Kevin', age: 30 };

type User2 = { name: string } | string;
let u12: User2 = {name: 'Max'};
u12 = 'Michael';