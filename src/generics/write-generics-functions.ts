// Use Generic when you are LOCKING in a type.
// Use Union type when you are using either or , type. not sure of which yet.

// ** EXAMPLE 1 -------------------------------------------

/**
 * T and U are dynamic generic types
 */
function merge<T, U>(obj1: T, obj2: U): T & U {
  return {...obj1, ...obj2};
}

// TS now knows newObj is a intersect of T and U
const newObj = merge({name: "Kevin"}, {age: 30});

newObj.name // Kevin
newObj.age //30
// where is the 30?
const newObj2 = merge({name: "Kevin2"}, 30);
//console.log(newObj2) //{name: "Kevin2"}



// ** EXAMPLE 2 -------------------------------------------

// We need constraints on the generic types.
// They need to be at least be some type.. like an object 
function merge2<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return {...obj1, ...obj2}; 
}
//const newObj3 = merge2({name: "Kevin2"}, 30); // ERROR, 30 does not extend object
const newObj3 = merge2({name: "Kevin2"}, { });


function merge3<T extends object, U extends object | number>(obj1: T, obj2: U): T {
  //return {...obj1, ...obj2}; // error, cant use spread on numbers

  return {...obj1, newProp: "Another"};
}


// ** EXAMPLE 3 -------------------------------------------

// Write a function that returns a tuple with the items and its length
type Lengthable = {
  length: number;
}

/**
 * Item has to be a something that extends from Lengthable
 * @param item 
 */
function getObjAndLength<T extends Lengthable>(item: T): [T, string] {
  let description: string = "No items";
  if (item.length > 0) {
    description = "Got " + item.length + (item.length === 1 ? " item" : " items");
  }
  return [item, description];
}

//console.log(getObjAndLength("Kevin")); // ["Kevin", "Got 5 items"]
//console.log(getObjAndLength(["Kevin"])); //[Array(1), "Got 1 item"]


// ** EXAMPLE 4 -------------------------------------------

// Take the given object and get the value of the key provided
function extractandConvert<T extends object, U extends keyof T>(obj: T, keyName: U) {
  return obj[keyName];
}

//console.log(extractandConvert({name: "Kevin"}, "name")); // Kevin