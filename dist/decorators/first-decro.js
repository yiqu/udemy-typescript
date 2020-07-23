"use strict";
/**
 *
 * Decroators.
 *
 * Decroators are just functions. They are run when a class is defined. NOT when they are institiaed
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(toLog) {
    return function (cons) {
        //console.log(toLog);
    };
}
let MyTable = class MyTable {
    constructor(color) {
        this.legCount = 4;
        console.log("Creating table..");
        this.color = color;
    }
    sayHi() {
        console.log("Hi");
    }
};
MyTable = __decorate([
    Logger("Hello, I am a Decro, log me now")
], MyTable);
