"use strict";
/**
 * Array and Object destructure
 */
var aHobbyList = ["Soccer", "Basketball", "Football", "Baseball", "Hockey"];
// to destruce this array and store the items into individual variables:
var hob1 = aHobbyList[0], hob2 = aHobbyList[1];
// Soccer, basketball
//console.log(hob1, hob2)
var hob3 = aHobbyList[0], hob4 = aHobbyList.slice(1);
//console.log(hob4.length) //4
var soccerHob = aHobbyList[0], basketballHob = aHobbyList[1];
//Soccer Basketball
//console.log(soccerHob, basketballHob)
// Object destructure
var newPersonx = {
    namezz: "Kevin",
    agezz: 30
};
// pulls out the property and assign it to the variable namezz, agezz
var namezz = newPersonx.namezz, agezz = newPersonx.agezz;
// Kevin 30
//console.log(namezz, agezz)
// pull out the property and assign them to new variables
var newNamezz = newPersonx.namezz, newAgezz = newPersonx.agezz;
// Kevin 30 . newNamezz is Kevin, newAgezz is 30
// console.log(newNamezz, newAgezz)
