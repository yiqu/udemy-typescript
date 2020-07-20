// Combine string or number
function combine(n1: string | number, n2: string | number) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
  
}

console.log(combine(5, "2")) // '52'
console.log(combine(5, 2)) // 7