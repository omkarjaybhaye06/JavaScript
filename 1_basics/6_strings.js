/*
JAVASCRIPT STRINGS:
*/
const string1 = new String("Hello"); // Creates a String object (not recommended)
const string2 = "Hello"; // Creates a string primitive (recommended)

// TEMPLATE LITERALS (using backticks ``)
let name = "Omkar";
let age = 24;
console.log("My name is " + name + " and age is " + age); // Old way using concatenation
console.log(`My name is ${name} and age is ${age}`);

// IMPORTANT NOTE: Strings in JavaScript are immutable, which means that once a string is created, it cannot be changed. Any operation that seems to modify a string actually creates a new string.
let x = "hello";
x.toUpperCase();
console.log(x); // hello (strings are immutable)

// PROPERTIES AND METHODS OF STRINGS:
let str = "JavaScript";
console.log(str.length); // 10

// ACCESSING CHARACTERS
console.log(str[0]); // J
console.log(str.charAt(1)); // a
console.log(str.at(-1)); // t

// CASE METHODS
console.log(str.toUpperCase()); // JAVASCRIPT
console.log(str.toLowerCase()); // javascript

// TRIM METHODS (remove whitespace from both ends of a string)
let s = "  Hello  ";
console.log(s.trim()); // "Hello"
console.log(s.trimStart()); // "Hello  "
console.log(s.trimEnd()); // "  Hello"

// SEARCH METHODS
let text = "Hello World";
console.log(text.includes("World")); // true
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("World")); // true
console.log(text.indexOf("o")); // 4
console.log(text.lastIndexOf("o")); // 7
console.log(text.search("World")); // 6

// EXTRACT METHODS
let lang = "JavaScript";
console.log(lang.slice(0, 4)); // Java
console.log(lang.slice(-7, 5)); // aS
console.log(lang.substring(0, 4)); // Java
console.log(lang.substring(4, 0)); // Java (substring swaps the indices if start is greater than end)
console.log(lang.substring(-7, 5)); // JavaS (negative indices are treated as 0 in substring)
console.log(lang.substr(4, 6)); // Script (Deprecated) i.e. not recommended to use substr() method as it is not part of the ECMAScript standard and may not be supported in all environments. It is better to use slice() or substring() for extracting parts of a string.

// REPLACE METHODS
let msg = "I like Java";
console.log(msg.replace("Java", "JavaScript")); // I like JavaScript (replaces only the first occurrence)
console.log("cat dog cat".replaceAll("cat", "lion")); // lion dog lion (replaces all occurrences)

// JOIN METHODS
console.log("Hello".concat(" World")); // Hello World
console.log(["Hello", "World"].join(" ")); // Hello World

// SPLIT METHOD
console.log("a,b,c".split(",")); // ["a", "b", "c"]
console.log("Hello World".split(" ")); // ["Hello", "World"]

// REPEAT METHOD
console.log("Hi ".repeat(3)); // Hi Hi Hi

// PADDING METHODS
console.log("5".padStart(3, "0")); // 005 i.e. pad the string "5" with "0" at the start until the total length is 3
console.log("5".padEnd(3, "0")); // 500

// CHARACTER CODES
console.log("A".charCodeAt(0)); // 65

// REGEX METHODS: Regular expressions are patterns used to match character combinations in strings. They are used for searching, validating, and manipulating strings based on specific patterns.
console.log("JavaScript".match(/a/)); // ["a"] (matches the first occurrence of "a") also displays the index and input string and groups if any
console.log("JavaScript".match(/a/g)); // ["a", "a"] (matches all occurrences of "a")
console.log("JavaScript".search(/S/)); // 4 (searches for "S" and returns its index, returns -1 if not found)
