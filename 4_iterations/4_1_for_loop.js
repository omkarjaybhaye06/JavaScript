/*
1]For Loop:
The for loop is a control flow statement that allows you to execute a block of code repeatedly for a specified number of iterations. 
It consists of three parts: initialization, condition, and increment/decrement.
syntax:
       for (initialization; condition; increment/decrement) {
       // code to be executed
       }

2]Nested For Loop: It is a for loop inside another for loop. The inner loop is executed completely for each iteration of the outer loop.
3]Continue Statement: The continue statement is used to skip the current iteration of a loop and move to the next iteration.
4]break Statement: The break statement is used to exit a loop prematurely, regardless of the loop's condition.
*/

for (let i = 0; i < 5; i++) {
  const val1 = i + 1;
  if (val1 == 3) {
    continue;
  }
  console.log(val1);
}

for (let i = 1; i <= 3; i++) {
  console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j}=`, i * j);
  }
}

let arr1 = [12, 13, 67, 76];
for (let i = 0; i < arr1.length; i++) {
  const element = arr1[i];
  console.log(element);
}

//sort an array using for loop
let array = [55, 44, 12, 14, 90, 75, 65, 22];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
console.log(array);

//sort an array using sort function
let array2 = [63, 387, 18, 132, 28, 910];
array2.sort(function (a, b) {
  return a - b; //for sorting in ascending order
  //return b - a; //for sorting in descending order
});
console.log(array2);

//Note:console.log(array2.sort());
//.sort() without a function converts numbers to strings and sorts lexicographically (alphabetically by digits).
