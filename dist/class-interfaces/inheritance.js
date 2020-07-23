"use strict";
/**
 * Class Inheritance
 */
class Animal {
    // protected variable is visible to children classes that extends this parent
    constructor(animalId, location, gender) {
        this.animalId = animalId;
        this.location = location;
        this.gender = gender;
    }
    makeNoise() {
        console.log("I am making a noise!");
    }
}
class Cat extends Animal {
}
// a Dog class that presets the ID
class Dog extends Animal {
    constructor(location) {
        super("Dog", location);
        this.location = location;
    }
    makeNoise() {
        console.log("WOOF");
    }
}
// a Bird class that has more fields
class Bird extends Animal {
    constructor(location, color) {
        super("Dog", location);
        this.location = location;
        this.color = color;
    }
    myColor() {
        console.log("My color is " + this.color);
    }
}
const cat1 = new Cat("Catty", "VA");
//console.log(cat1); //Cat {animalId: "Catty", location: "VA"}
//cat1.makeNoise(); //I am making a noise!
const dog1 = new Dog("MD");
//dog1.makeNoise(); //WOOF
//console.log(dog1); //Dog {animalId: "Dog", location: "MD"}
const bird1 = new Bird("ME", "Yellow");
//bird1.myColor(); //My color is Yellow
