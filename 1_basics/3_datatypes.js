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

// -------------------stack and heap memory------------------

// Primitive Types     => Stack => Copy
// i.e. Stored in Stack--Copy is passed--Changes do not affect original value

let a = 10;
let b = a; // Copy
b = 20;
console.log(a); // 10
console.log(b); // 20

// Non-Primitive Types => Heap  => Reference
// i.e. Stored in Heap--Reference is passed--Changes affect original value

let obj1 = { name: "Omkar" };
let obj2 = obj1; // Reference
obj2.name = "Jaybhaye";
console.log(obj1.name); // Jaybhaye
console.log(obj2.name); // Jaybhaye

// but if we need to create separate copy of object(or for any non-primitive type) then we can use Object.assign() or spread operator
let obj1 = {
  name: "Omkar",
};
let obj2 = { ...obj1 }; // Separate copy using spread operator
obj2.name = "Jaybhaye";
console.log(obj1.name); // Omkar
console.log(obj2.name); // Jaybhaye

let obj3 = { name: "Omkar" };
let obj4 = Object.assign({}, obj3); // Separate copy using Object.assign()
obj4.name = "Jaybhaye";
console.log(obj3.name); // Omkar
console.log(obj4.name); // Jaybhaye
