"use strict";
/**
 * Absract class - provide methods but not definitions
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    return Mouse;
}());
var BlueMouse = /** @class */ (function (_super) {
    __extends(BlueMouse, _super);
    function BlueMouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlueMouse.prototype.makeNoise = function () {
        return "I am blue!!";
    };
    return BlueMouse;
}(Mouse));
//const m1 = new Mouse(); // ERROR cant institant abstract class
var m2 = new BlueMouse();
var nn = m2.makeNoise();
//console.log(nn) //I am blue!!
