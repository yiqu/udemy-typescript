"use strict";
function createWaterBottle(c, v, owner) {
    // Partial, which tells TS that the props could all be optional
    let res = {};
    res.color = "blue";
    res.volume = 12;
    res.belongsTo = owner;
    return res;
}
//console.log(createWaterBottle("blue", 12, "Kevin"));
// now i cant push nor pop
const readonlynames = ["K", "E"];
