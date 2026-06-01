/*
Datatypes in JS:
Primitive and Non-Primitive. Primitive types include String, Number, Boolean, Undefined, Null, BigInt, and Symbol.
Non-Primitive types include Objects, Arrays, Functions, Dates, and other reference types.
Primitive values are stored by value, whereas non-primitive values are stored by reference.
*/

//Primitive types Examples:
let name = "John"; // String
let age = 25; // Number
let isActive = true; // Boolean
let x; // Undefined
let y = null; // Null // Note- null is a special standalone value that represents "no value" or "empty value". It is of type object due to a historical bug in JavaScript, but it is considered a primitive type.
let big = 123456789n; // BigInt
let id = Symbol("id"); // Symbol

("use strict"); // treat all JS code as newer version
console.log(typeof undefined); // undefined
console.log(typeof null); // object

//Non-Primitive types Examples:
let person = { name: "Omkar", age: 24 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
function greet() {
  // Function
  console.log("Hello, Omkar!");
}

let date = new Date(); // Date
console.log(date); // Current date and time
console.log(date.getFullYear()); // Year
console.log(date.getMonth()); // Month (0-11)
console.log(date.getDate()); // Day

//RegExp (Regular Expression): it is an object used to search, match, validate, and manipulate text based on patterns.
let pattern = /abc/; // Regular Expression
console.log(pattern.test("abcdef")); // true
console.log(pattern.test("xyz")); // false
