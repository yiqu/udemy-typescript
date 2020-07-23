/**
 * This decrorator takes in template, id and text
 * 
 * Then it will render the text with the template tags withi the DOM with the ID.
 */


function TemplateDecro(template: string, id: string, name: string) {
  return function(constructor: any) {
    // grab the element with the id provided
    let ele: HTMLElement | null = document.getElementById(id);

    // create the Class with its constructor method
    const cpu = new constructor(name);

    // call one of the methods in the class
    const wholeText: string = cpu.getComputer();

    // Render the text to the DOM
    if (ele) {
      ele.innerHTML = template;
      ele.querySelector("h3")!.textContent = "Hello! " + wholeText;
      
    }  
  }
}

@TemplateDecro("<h3></h3>", "temp-id", "Kevin Qu")
class MyComputer {

  myName: string;

  constructor(name: string) {
    this.myName = name;
  }

  getComputer() {
    return "I am "+ this.myName + "'s computer!";
  }
}


// Multiple decroators are allowed, and they are executed in the order of BOTTOM UP.

// @Second- to be exec
// @First - to be exec
// class Hello {}