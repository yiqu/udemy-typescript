/**
 * Spread operators
 */

// Using spread with arrays

const myHobbies: string[] = ["Soccer", "Basketball", "Football"]
const myNewHobbies: string[] = [];

// ["Soccer", "Basketball", "Football", "Hiking"]
myNewHobbies.push(...myHobbies, "Hiking");


// Using spread with Objects

const newPerson = {
  name: "Kevin",
  age: 30
}

//{name: "Kevin", age: 30, location: "Earth"}
const copiedPerson = {
  ...newPerson, 
  location: "Earth"
};

//{name: "Kevin", age: 40}
const copiedPerson2 = {
  ...newPerson, 
  age: 40
};
