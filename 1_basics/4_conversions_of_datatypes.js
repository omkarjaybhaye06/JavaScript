//Type Conversions in JavaScript:

// typeof Operator
console.log("typeof Operator");
console.log(typeof "Hello"); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (JavaScript bug but intensionally)
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function

// STRING CONVERSION
console.log("STRING CONVERSION");
console.log(String(123), typeof String(123)); // "123" , string
console.log((123).toString(), typeof (123).toString()); // "123", string
console.log("5" + 2, typeof ("5" + 2)); // "52", string // + with string => concatenation

// NUMBER CONVERSION
console.log("NUMBER CONVERSION");
console.log(Number("123"), typeof Number("123")); // 123, number

console.log(parseInt("123px"), typeof parseInt("123px")); // 123, number
console.log(parseFloat("12.5"), typeof parseFloat("12.5")); // 12.5, number

console.log("5" - 2, typeof ("5" - 2)); // 3, number // -, *, /, % convert strings to numbers
console.log("5" * 2, typeof ("5" * 2)); // 10, number

// BOOLEAN CONVERSION
console.log("BOOLEAN CONVERSION");
console.log(Boolean(1), typeof Boolean(1)); // true, boolean
console.log(Boolean(0), typeof Boolean(0)); // false, boolean
console.log(Boolean("Hello"), typeof Boolean("Hello")); // true, boolean
console.log(Boolean(""), typeof Boolean("")); // false, boolean

// SPECIAL CONVERSIONS
console.log("SPECIAL CONVERSIONS");
console.log(Number(true), typeof Number(true)); // 1, number
console.log(Number(false), typeof Number(false)); // 0, number

console.log(String(true), typeof String(true)); // "true", string
console.log(String(false), typeof String(false)); // "false", string

console.log(Number(null), typeof Number(null)); // 0, number
console.log(Number(undefined), typeof Number(undefined)); // NaN, number

console.log(5 == "5"); // true
console.log(5 === "5"); // false

console.log("5" + 2, typeof ("5" + 2)); // "52", string
console.log("5" + 2 + 2, typeof ("5" + 2 + 2)); // "522", string
console.log(2 + 2 + "5", typeof (2 + 2 + "5")); // "45", string
console.log("5" - 2, typeof ("5" - 2)); // 3, number
console.log(true + 1, typeof (true + 1)); // 2, number
console.log(false + true, typeof (false + true)); // 1, number
console.log(null + 1, typeof (null + 1)); // 1, number
console.log(undefined + 1, typeof (undefined + 1)); // NaN, number
console.log(+"", typeof +""); // 0, number // since "" is falsy value
console.log(+"true", typeof +"true"); // NaN, number
console.log(+true, typeof +true); // 1, number
console.log(+"5", typeof +"5"); // 5, number

let a = 100,
  b = 100,
  c = 200,
  d = c++,
  e = 300,
  f = --e;
a++; // a = a + 1 => 101 //postfix
++b; //prefix
console.log(a); // 101
console.log(b); // 101
console.log(c); // 201 //c prints 201 because the increment happened immediately after assigning the old value (200) to d
console.log(d); // 200
console.log(c); // 201
console.log(e); // 299
console.log(f); // 299

/*
In Short:
typeof value      -> Returns datatype

String(value)     -> string
Number(value)     -> number
Boolean(value)    -> boolean

parseInt()        -> integer
parseFloat()      -> decimal number

+  -> String Concatenation
-,*,/,% -> Numeric Conversion

==  -> Loose Equality
=== -> Strict Equality

typeof null       -> object
typeof []         -> object
typeof {}         -> object
typeof function(){} -> function

// TRUTHY & FALSY values-
-Falsy Values total 8 in JS: 
       false, 0, -0, 0n, "", null, undefined, NaN
-Everything else is Truthy: 
       true, " ", "0", [], {}, function(){}, "Hello", 1, -1, Infinity, -Infinity, etc.

*/
