function fizzbuzz(num: number) {
  for (let i=0; i<num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizz buzz", i);
    } else if (i % 5 === 0) {
      console.log("fizz", i);
    } else if (i % 3 === 0) {
      console.log("buzz", i)
    }
  }
}

//fizzbuzz(50);


const arr = [1,2,3];
const objrr = {
  kevin: "KEVIN",
  bekah: "BEKAH"
}

// for..of is for ITERATORS
for (const i of arr) {
  //console.log(i)
}

// for..in is for OBJECTS
for (const i in objrr) {
  //console.log(i)
}
