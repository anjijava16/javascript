
function incRef(numberRef){
  numberRef[0]++;
}
var n = [7];
console.log(n[0]);  // 7
incRef(n);
console.log(n[0]);  // 8