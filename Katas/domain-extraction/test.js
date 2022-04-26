var foo = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#differences_between_substring_and_slice"
);
console.log("foo-> ", foo.host);

const bar = foo.host;

const dotIndex = bar.indexOf(".");
console.log("dot->", dotIndex);

const carr = Array.from(bar);
console.log(carr);

const element = ".";

var myArray = [];

var indexes = carr.indexOf(element);

while (indexes != -1) {
  myArray.push(indexes);
  indexes = carr.indexOf(element, indexes + 1);
}
myArray[0] += 1;
console.log("array-> ", myArray);
let result = "";
carr.forEach((car) => {
  result += car;
});
console.log(result);
console.log(result.slice(myArray[0], myArray[1]));
