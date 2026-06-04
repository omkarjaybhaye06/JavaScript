/*
Scope:scope determines where a variable is available to be used.
var   -->globally scoped(also function-scoped) -->can be redeclared and reassigned --> eg. var a= 45; var a ="Hello";
let   -->blocked scoped  -->cannot be redeclared, but cannot be reassigned --> eg. let x=5; x=10;
const -->blocked scoped  -->cannot be redeclared and not be reassigned 
                         --> initialization is necessary --> eg. const a=5; (const a; this will be wrong)
*/
//Global scope-->Variables declared outside any function or block are in the global scope. Accessible anywhere in the file or window (browser).
var globalVar = "I'm global";
function show() {
  console.log(globalVar); //Accessible here
}
show();
console.log(globalVar); //Accessible here too

//Function scope-->Variables declared inside a function using var, let, or const are function-scoped. Only accessible within that function.
function greet() {
  var name = "Omkar";
  console.log(name); //Accessible inside
}
greet();
// console.log(name); //ReferenceError – not accessible outside the function even though var is globally-scoped in such cases

//Blocked scope(let and const)--> Variables declared using let or const inside a block {} are block scoped.
{
  let a = 10;
  const b = 20;
  var c = 30;
}

console.log(c); //30 (because var is function/global scoped)
// console.log(a); //Error
// console.log(b); //Error
//Note: let and const are block-scoped, while var is not.

//Lexical Scope(Static scope)-->Functions are lexically scoped, meaning they remember the scope in which they were defined, not called.
function outer() {
  let name = "Jaybhaye";

  function inner() {
    const language = "Javascript";
    console.log(name); //Accessible – Lexical Scope
  }
  //console.log(language); //gives error as const scope was only inside func inner
  //Note: if we run above line then it will not execute below lines eg. inner()
  inner(); //prints Jaybhaye once pointer comes on this line
  //Note: if we commmented inner(), then even outer() is called below will not print anything as log is done inside func inner.
}
outer();
//Note:Inner functions can access variables from their outer functions.

//Block vs function-scoped example
function testScope() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }

  console.log(x); //10 (function-scoped)
  // console.log(y); //Error
  // console.log(z); //Error
}

//Scope chain-->If a variable is not found in the local scope, JavaScript looks upward in the scope chain.
let a = 1;
function first() {
  let b = 2;
  function second() {
    let c = 3;
    console.log(a + b + c); //1 + 2 + 3 = 6
  }
  second();
}
first();
//Note:Variables are resolved from inner to outer scopes.

// ---------Extra..if finds confusing then neglect below part----------
if (true) {
  let a1 = 200;
  const b1 = 300;
  var c1 = 500;
}
//console.log(a1); //throws error as it is blocked scoped
//console.log(b1); //throws error
console.log(c1); //prints 500 as var is globally-scoped

var globalVar = "I'm global";
let a2 = 1200;
const b2 = 1300;
var c2 = 1500;
function show() {
  console.log(globalVar); //Accessible here
  let a2 = 200;
  const b2 = 300;
  var c2 = 500;
  console.log(a2); //prints 200 as it is blocked scope and can be accessed inside this scope{}
  console.log(b2); //prints 300 as it is blocked scope and can be accessed inside this scope{}
  console.log(c2); //prints 500 as it is global scope and can be accessed inside this scope{} and outside as well
}
show();
console.log("After function completed");
console.log(globalVar); //Accessible here too
console.log(a2); //prints 1200 as let scope is blocked and so can't access value 200
console.log(b2); //prints 1200 as const scope is blocked and so can't access value 300
console.log(c2); //prints 1500 even var is globally-scoped, but in this case as same cariable name is used so instead of value 500 from above function, it will print 1500
//so we avoid using var
// -----------------------------------------

//Below 2 examples are of concept type Hoisting
console.log(sum1(10)); //prints 15 , since directly function is written instead of expression format, so can be accessed stored value of below function.
function sum1(num1) {
  //here function is only declared
  return num1 + 5;
}
//console.log(sum1(10)); //prints 15

//console.log(sum2(20)); //throws error since now sum2 is expression and then it stores function,  hence even function stores return value but will not directly hoisted in variable here known as expression
const sum2 = function (num2) {
  //here function is declared and then holded it in sum2
  return num2 + 7;
};
//console.log(sum2(20)); //prints 27 since expression of func is called after execution.
//Note :in javascript execution takes place line-by-line.
//Note:The execution context for 'this' is different in Node environment compared to browser environment. In browser value of 'this' arrives as a window object.
