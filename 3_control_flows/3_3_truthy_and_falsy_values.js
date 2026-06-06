/*
In JavaScript, truthy and falsy values determine how non-boolean values behave in boolean contexts like 
if, while, ||, &&, ternary operations, etc.

falsy values: Values that are treated as false when used in boolean contexts.
falsy values are as follows--> false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values: Values that are treated as true when used in boolean contexts.
truthy values are as follows--> true, 'false', "0", " ", [], {}, function(){}
*/
const userEmail = []; //passing empty array, this comes under truthy values
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

if (userEmail.length === 0) {
  //solution to detect whether array is empty or not
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  //solution to detect whether object is empty or not
  console.log("Object is empty");
}

if (true) console.log("Runs true");
if (42) console.log("Runs 42");
if ("hello") console.log("Runs hello");
if ([]) console.log("Runs empty array");
if ({}) console.log("Runs empty object");
if (function () {}) console.log("Runs empty function");

//Implicit boolean values: Javascript automatically converts values to boolean in conditional expression
const a = Boolean(""); //prints false as empty string "" is falsy value
console.log(a);

const b = Boolean("Omkar"); //prints true
console.log(b);

const c = Boolean([]); //prints true as empty array is truthy value
console.log(c);

const d = Boolean(undefined); //prints false
console.log(d);

console.log(false == 0); //true
console.log(false == ""); //true
console.log(0 == ""); //true

//---------------------------------
/*
Nullish Coalescing Operator (??)--> taken into consideration when null or undefined output is occured.
The Nullish Coalescing Operator (??) is used to provide a default value only when the left-hand side is null or undefined.

let result = value ?? defaultValue;
-If value is null or undefined, then result will be defaultValue.
-If value is anything else (even falsy like 0, "", or false), then result will be value.
*/
let val1, val2, val3, val4;
let user = null;
let name = user ?? "Anonymous";
console.log(name); // Anonymous
val1 = 10 ?? 20; //10 //if first number not obtained at point from database/api/firebase then the other value is processed
val2 = null ?? 50; //50
val3 = undefined ?? 70; //70
val4 = null ?? 40 ?? 90; //40 -takes first value other than 'null' and 'undefined'.
console.log(val1, val2, val3, val4);

//Note: Use ?? when you only want to check for null or undefined, not other falsy values like "" or 0.
let username = "";
let displayName = username || "Guest";
console.log(displayName); //"Guest" ("" is falsy) since || takes falsy values into consideration while performing operations

let displayName2 = username ?? "Guest";
console.log(displayName2); //"" ("" is NOT null or undefined)

//------------------------------
/*
Ternary Operators-->writes if-else statements different format in short.
syntax--> condition ? true : false ;
*/
const capPrice = 110;
capPrice > 380 ? console.log("change shop") : console.log("Buy now");
