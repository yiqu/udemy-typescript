"use strict";
/**
 * This decrorator takes in template, id and text
 *
 * Then it will render the text with the template tags withi the DOM with the ID.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function TemplateDecro(template, id, name) {
    return function (constructor) {
        // grab the element with the id provided
        let ele = document.getElementById(id);
        // create the Class with its constructor method
        const cpu = new constructor(name);
        // call one of the methods in the class
        const wholeText = cpu.getComputer();
        // Render the text to the DOM
        if (ele) {
            ele.innerHTML = template;
            ele.querySelector("h3").textContent = "Hello! " + wholeText;
        }
    };
}
let MyComputer = class MyComputer {
    constructor(name) {
        this.myName = name;
    }
    getComputer() {
        return "I am " + this.myName + "'s computer!";
    }
};
MyComputer = __decorate([
    TemplateDecro("<h3></h3>", "temp-id", "Kevin Qu")
], MyComputer);
// Multiple decroators are allowed, and they are executed in the order of BOTTOM UP.
// @Second- to be exec
// @First - to be exec
// class Hello {}
