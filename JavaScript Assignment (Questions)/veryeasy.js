console.log("1) Convert Minutes into Seconds");
function convert(a) {
  return a * 60;
}
console.log(convert(5));
console.log(convert(3));
console.log(conver(2));

console.log("2) Divides Evenly");
function dividesEvenly(a, b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(dividesEvenly(98, 7));
console.log(dividesEvenly(85, 4));
