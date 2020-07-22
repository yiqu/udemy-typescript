"use strict";
/**
 * Class Inheritance
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
var Animal = /** @class */ (function () {
    // protected variable is visible to children classes that extends this parent
    function Animal(animalId, location, gender) {
        this.animalId = animalId;
        this.location = location;
        this.gender = gender;
    }
    Animal.prototype.makeNoise = function () {
        console.log("I am making a noise!");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
// a Dog class that presets the ID
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(location) {
        var _this = _super.call(this, "Dog", location) || this;
        _this.location = location;
        return _this;
    }
    Dog.prototype.makeNoise = function () {
        console.log("WOOF");
    };
    return Dog;
}(Animal));
// a Bird class that has more fields
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(location, color) {
        var _this = _super.call(this, "Dog", location) || this;
        _this.location = location;
        _this.color = color;
        return _this;
    }
    Bird.prototype.myColor = function () {
        console.log("My color is " + this.color);
    };
    return Bird;
}(Animal));
var cat1 = new Cat("Catty", "VA");
//console.log(cat1); //Cat {animalId: "Catty", location: "VA"}
//cat1.makeNoise(); //I am making a noise!
var dog1 = new Dog("MD");
//dog1.makeNoise(); //WOOF
//console.log(dog1); //Dog {animalId: "Dog", location: "MD"}
var bird1 = new Bird("ME", "Yellow");
//bird1.myColor(); //My color is Yellow
