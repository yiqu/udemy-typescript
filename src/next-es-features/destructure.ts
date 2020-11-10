/**
 * Array and Object destructure 
 */


const aHobbyList: string[] = ["Soccer", "Basketball", "Football", "Baseball", "Hockey"];
// to destruce this array and store the items into individual variables:

let [hob1, hob2] = aHobbyList;
// Soccer, basketball
//console.log(hob1, hob2)

let [hob3, ...hob4] = aHobbyList;
//console.log(hob4.length) //4

let [soccerHob, basketballHob]: string[] = aHobbyList;
//Soccer Basketball
//console.log(soccerHob, basketballHob)


// Object destructure

const newPersonx = {
  namezz: "Kevizzdsn",
  agezz: 30
}

// pulls out the property and assign it to the variable namezz, agezz
let {namezz, agezz} = newPersonx;
// Kevin 30
//console.log(namezz, agezz)

// pull out the property and assign them to new variables

let {namezz: newNamezz, agezz: newAgezz} = newPersonx;
// Kevin 30 . newNamezz is Kevin, newAgezz is 30
// console.log(newNamezz, newAgezz)


