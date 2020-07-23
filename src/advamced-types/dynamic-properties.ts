/**
 * Create an interface that has dynamic properties.
 * 
 * 
 */


interface ErrorContainer {
  [key: string]: string;
}

class TheErrorClass implements ErrorContainer {
  [key: string]: string;
}

let eClass = new TheErrorClass();
eClass.sd = "String stuff"; // the property is recongized because it is a string type that returns a string