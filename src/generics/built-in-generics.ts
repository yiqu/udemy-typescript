// builtin generics


const namesArr: Array<boolean> = []; //same as string[]

const gz = 5;

const isItComing = new Promise<string>(
  (resolve, rej) => {
    if (gz > 1) {
      resolve("Good");
    } else {
      rej("Error " + rej);
    }
  }
);

isItComing.then((val) => {

},
(rej) => {
  console.log(rej)
})