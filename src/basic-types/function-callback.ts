export{}

function add(n1: number, n2: number) {
  return n1 + n2;
}
function printRes(n1: number) {
  console.log(n1);
}

function addAndHandle(n1: number, n2: number, cb:(num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(4,5, (num) => {console.log(num + " logged")});