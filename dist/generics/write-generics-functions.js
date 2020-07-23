"use strict";
// Use Generic when you are LOCKING in a type.
// Use Union type when you are using either or , type. not sure of which yet.
// ** EXAMPLE 1 -------------------------------------------
/**
 * T and U are dynamic generic types
 */
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// TS now knows newObj is a intersect of T and U
const newObj = merge({ name: "Kevin" }, { age: 30 });
newObj.name; // Kevin
newObj.age; //30
// where is the 30?
const newObj2 = merge({ name: "Kevin2" }, 30);
//console.log(newObj2) //{name: "Kevin2"}
// ** EXAMPLE 2 -------------------------------------------
// We need constraints on the generic types.
// They need to be at least be some type.. like an object 
function merge2(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
//const newObj3 = merge2({name: "Kevin2"}, 30); // ERROR, 30 does not extend object
const newObj3 = merge2({ name: "Kevin2" }, {});
function merge3(obj1, obj2) {
    //return {...obj1, ...obj2}; // error, cant use spread on numbers
    return Object.assign(Object.assign({}, obj1), { newProp: "Another" });
}
/**
 * Item has to be a something that extends from Lengthable
 * @param item
 */
function getObjAndLength(item) {
    let description = "No items";
    if (item.length > 0) {
        description = "Got " + item.length + (item.length === 1 ? " item" : " items");
    }
    return [item, description];
}
//console.log(getObjAndLength("Kevin")); // ["Kevin", "Got 5 items"]
//console.log(getObjAndLength(["Kevin"])); //[Array(1), "Got 1 item"]
// ** EXAMPLE 4 -------------------------------------------
// Take the given object and get the value of the key provided
function extractandConvert(obj, keyName) {
    return obj[keyName];
}
//console.log(extractandConvert({name: "Kevin"}, "name")); // Kevin
