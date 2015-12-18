function AlphabetSoup(str) {
  var result = str.toLowerCase().split("").sort().join("");
  return result;
}

AlphabetSoup('Hello, world. It is Wednesday.');


function SimpleAdding(num) {
  var sum = 0;
  for(var counter = 1; counter <= num; counter++) {
   sum += counter;
  }
  return sum;

}

SimpleAdding(9);
