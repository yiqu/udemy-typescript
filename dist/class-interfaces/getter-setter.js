"use strict";
// user getters and setters
class Computer {
    constructor(cpu, color, id) {
        this.cpu = cpu;
        this.color = color;
        this.id = id;
    }
    /**
     * A getter for id
     */
    get pcId() {
        var _a;
        return (_a = this.id) !== null && _a !== void 0 ? _a : "No ID"; //nullish colliasing
    }
    set setPcId(id) {
        if (!id) {
            throw new Error("Invalid ID");
        }
        this.id = id;
    }
}
const pc1 = new Computer("AMD", "Red");
// console.log(pc1.pcId); // No ID
const pc2 = new Computer("Intel", "Black");
pc2.setPcId = "01010";
//console.log(pc2) //Computer {cpu: "Intel", color: "Black", id: "010101"}
