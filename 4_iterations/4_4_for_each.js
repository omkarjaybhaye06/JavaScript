/*
for...each--> The .forEach() method in JavaScript is used to iterate 
              over elements of an array, and executes a provided callback function once for each element.
Syntax-->  array.forEach(function(element, index, array) {
           // your code here
           //return element//not possible give undefined
           });
    Note:for...each will not return anyvalue, we want to log value in it if required (if filter is used then we can return value)
*/

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){ //here function(val_oranyname){ is considered as a callback function. //Note:callback function do not have fun_name so not used function coding(parameters){}
//     console.log(val);
// } )

coding.forEach((item) => {
  console.log(item);
});

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

//Sum of array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach((num) => {
  sum += num;
});

console.log("Total:", sum); //prints 15
