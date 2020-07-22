"use strict";
// user getters and setters
var Computer = /** @class */ (function () {
    function Computer(cpu, color, id) {
        this.cpu = cpu;
        this.color = color;
        this.id = id;
    }
    Object.defineProperty(Computer.prototype, "pcId", {
        /**
         * A getter for id
         */
        get: function () {
            var _a;
            return (_a = this.id) !== null && _a !== void 0 ? _a : "No ID"; //nullish colliasing
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computer.prototype, "setPcId", {
        set: function (id) {
            if (!id) {
                throw new Error("Invalid ID");
            }
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    return Computer;
}());
var pc1 = new Computer("AMD", "Red");
// console.log(pc1.pcId); // No ID
var pc2 = new Computer("Intel", "Black");
pc2.setPcId = "01010";
//console.log(pc2) //Computer {cpu: "Intel", color: "Black", id: "010101"}
