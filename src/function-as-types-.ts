function add(n1: number, n2: number) {
  return n1 + n2;
}
function printRes(n1: number) {
  console.log(n1);
}

// ENsures this type takes a function
let combineVal: Function;
// add() is a function, WORKS.
combineVal = add; 
console.log(combineVal(3,4));

//combineVal = 5; // ERROR, 5 is not a function
combineVal = printRes;
console.log(combineVal(3,4)); // prints 3


// Ensures this type takes a function that returns a number
let betterCombineVal: () => number;
// betterCombineVal = add; // ERROR, it takes no parameters, but add() has 2 params


// Ensures this type takes a function with 2 params and return a number
let betterCombineVal2: (num1: number, num2: number) => number;
betterCombineVal2 = add;
//betterCombineVal2 = printRes // ERROR

console.log(betterCombineVal2(5, 5));