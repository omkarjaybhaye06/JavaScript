// +++++++++++++ Numbers +++++++++++++++++++++++++++++

const score = 400;
console.log(score); // 400
console.log(typeof score); // number

const balance = new Number(100);
console.log(balance); // [Number: 100]
console.log(typeof balance); // object

// Number Methods
console.log(balance.toString()); // "100"
console.log(balance.toString().length); // 3
console.log(balance.toFixed(1)); // "100.0"

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // "123.9"

// Number Formatting
const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000

// Number Conversion
console.log(Number("100")); // 100
console.log(Number("100px")); // NaN

// parseInt() parses a string and returns an integer. It reads the string until it encounters a non-digit character, at which point it stops parsing and returns the integer value parsed up to that point. If the first character cannot be converted to a number, it returns NaN.
console.log(parseInt("100px")); // 100
console.log(parseFloat("99.99px")); // 99.99

// Validation
console.log(isNaN("Hello")); // true // isNaN() converts the argument to a number and then checks if it is NaN. If the conversion results in NaN, it returns true; otherwise, it returns false.
console.log(isNaN(100)); // false
console.log(Number.isNaN(NaN)); // true

console.log(isFinite(100)); // true
console.log(isFinite(Infinity)); // false

// Special Values
console.log(NaN); // NaN (Not a Number) // Represents an invalid number
console.log(typeof NaN); // number

// Number Constants
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 // Largest positive representable number
console.log(Number.MIN_VALUE); // 5e-324 // Smallest positive representable number (closest to zero)

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 // Largest integer that can be safely represented (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // Math Constants/methods
console.log(Math.PI); // 3.141592653589793

// Basic Methods
console.log(Math.abs(-4)); // 4 // Absolute value i.e converts negative number to positive number
console.log(Math.round(4.6)); // 5 // Rounds to the nearest integer
console.log(Math.ceil(4.2)); // 5 // Rounds up to the nearest integer
console.log(Math.floor(4.9)); // 4 // Rounds down to the nearest integer
console.log(Math.trunc(4.9)); // 4 // Truncates the decimal part, keeping only the integer part
console.log(Math.min(4, 3, 6, 8)); // 3 // Returns the smallest value
console.log(Math.max(4, 3, 6, 8)); // 8 // Returns the largest value

// Power & Root
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(25)); // 5
console.log(Math.cbrt(27)); // 3

// Sign
console.log(Math.sign(-5)); // -1
console.log(Math.sign(5)); // 1
console.log(Math.sign(0)); // 0

// Random Numbers
console.log(Math.random()); // Random number between 0 (inclusive) and 1 (exclusive) i.e. 0 to 0.999...
console.log(Math.random() * 10 + 1); // Random number between 1 (inclusive) and 11 (exclusive)
console.log(Math.floor(Math.random() * 10) + 1); // Random Integer from 1 to 10

// Random Number Between Min & Max
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random Integer from 10 to 20 (inclusive)

/*
Formula:
Math.floor(Math.random() * (max - min + 1)) + min
*/

// Exponential & Logarithm
console.log(Math.exp(1));
console.log(Math.log(10)); // Natural logarithm of 10 (base e)

// Trigonometry
console.log(Math.sin(0)); // 0
console.log(Math.cos(0)); // 1
console.log(Math.tan(0)); // 0
