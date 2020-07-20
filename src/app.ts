
function addz(n1: number, n2: number) {
  return n1 + n2;
}
function printResz(n1: number) {
  console.log(n1);
}
function plus42(n1: number) {
  return n1 + 42;
}
let ftype = (numToPrint: number) => {
  return numToPrint;
};
let gg = ftype(5);
console.log(gg)



function addAndHandle(n1: number, n2: number, cb:(numToPrint: number) => void) {
  const result = n1 + n2;
  cb(result);
}
addAndHandle(4,5, (num) => {console.log(num + "HI")});
addAndHandle(4,5, printResz);


function addAndHandle2(n1: number, n2: number, cb:(numToPrint: number) => number) {
  const result = n1 + n2;
  let r = cb(result);
  console.log(r);
}
addAndHandle2(1, 1, plus42);

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}
 
let jj =sendRequest('Send this!', (response) => { 
  console.log(response);
  return true;
 });
 console.log(jj)