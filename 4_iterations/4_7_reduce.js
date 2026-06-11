/*
reduce: reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
i.e The reduce() method is used to reduce an array to a single value by applying a function to each element (from left to right), while carrying an accumulator.
Syntax: array.reduce(callback, initialValue);

(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)
Calls the specified callback function for all the elements in an array. 
The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
*/

/*Callback function form
function callback(accumulator, currentValue, currentIndex, array) {
  // return the updated accumulator
}*/
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.reduce(function (prev_value, curr_val) {
  console.log(`previos:${prev_value} current:${curr_val}`);
  return prev_value + curr_val;
}, 0); //here 0(or any value we want to provide) will set initial value as 0 for passing in prev_value initially
console.log(result1); //prints 15

//Using arrow functions
const result2 = arr1.reduce((acc, curr) => acc + curr, 0);
console.log(result2); //prints 15

//For Array of objects in reduce method.
const cart = [
  {
    item: "Mobile",
    price: 25000,
  },
  {
    item: "Laptop",
    price: 50000,
  },
];
const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0); //here 0 is set as initial value, so initially acc will be 0 hence 0+25000=25000 will be stored and
//updates acc as 25000 after 1st rendering from 1st objects similary till last. so now acc 25000+curr.price 50000=75000 is value after passing to whole array
console.log(totalPrice);

let arr = [5, 10, 25, 2, 100];

//Finding maximum value using reduce
let max = arr.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(max); // 100
