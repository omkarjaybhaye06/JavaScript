let index = 0;
while (index <= 5) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
} //Value of index is 0 Value of index is 2 Value of index is 4

let myArray = ["Hii", "Hello", "bye"];
let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
} //Value is Hii Value is Hello Value is bye

let alpha = 97;
while (alpha <= 122) {
  console.log(String.fromCharCode(alpha));
  alpha++;
} //prints A to Z
console.log("-------------------------");

let charCode = "d".charCodeAt(0); // 100
let end = "h".charCodeAt(0); // 104
while (charCode <= end) {
  console.log(String.fromCharCode(charCode));
  charCode++;
} //prints d to h

let num = 5;
do {
  console.log(`Score is ${num}`);
  num++;
} while (num <= 10); //prints 5 to 10

console.log("-------------------");

let score = 11;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10); //prints 11 only since the condition not satisfied but will run atleast 1st value in do
