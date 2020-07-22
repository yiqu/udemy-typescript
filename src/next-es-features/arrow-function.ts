/**
 * Arrow Functions
 */



/**
 * Regular old way function
 */
const anAddFunction =  function (n1: number, n2: number) {
  return n1 + n2;
}


// Arrow function 

const anAddArrow = (n1: number, n2: number) => {
  return n1 + n2;
}

let res1 = anAddFunction(1,1);
let res2 = anAddArrow(2,2);

//console.log(res1, res2);