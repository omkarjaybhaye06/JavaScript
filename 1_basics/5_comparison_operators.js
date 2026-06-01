console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" == 2); // true because in == operator only values are compared.
console.log("2" === 2); // false because === checks for both value and type, and here we have a string "2" and a number 2.

console.log("2" > 1); // true
console.log("02" > 1); // true

//Note: Avoid using null and undefined in comparisons as they can lead to unexpected results due to type coercion. Always use strict equality (===) when comparing values to avoid unintended type conversions.
console.log(null > 0); // false because null is converted to 0 for comparison, and 0 is not greater than 0
console.log(null == 0); // false because null is only equal to undefined and not equal to any other value, including 0
console.log(null >= 0); // true because null is converted to 0 for comparison, and 0 is equal to 0

console.log(undefined == 0); // false because undefined is only equal to null and not equal to any other value, including 0
console.log(undefined > 0); // false because undefined is converted to NaN for comparison, and NaN is not greater than any value
console.log(undefined < 0); // false because undefined is converted to NaN for comparison, and NaN is not less than any value
console.log(undefined >= 0); // false because undefined is converted to NaN for comparison, and NaN is not greater than or equal to any value
