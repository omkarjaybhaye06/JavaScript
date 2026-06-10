/*
Map is a built-in object that lets you store key-value pairs, where keys can be of any type (not just strings or symbols, unlike regular objects).
A Map is an ordered collection of key-value pairs. It remembers the original insertion order of the keys.
*/
let arr1 = [10, 20, 30, 40, 50, 60];
const result1 = arr1.map((item) => {
  return (item = item + 1);
});
//const result1=arr1.map((item)=>item+1) //can also write in one line, note if {}is used then return keyword is must to execute code.
console.log(result1);

//Note:We can perform 2 or more operations at the same time as well
const result2 = arr1.map((num) => num + 5).filter((num) => num >= 30);
console.log(result2);

//-------
let map1 = new Map();

// Set values
map1.set("name", "Omkar");
map1.set(1, "number key");
map1.set(true, "boolean key");

// Get values
console.log(map1.get("name")); // Omkar

// Check existence
console.log(map1.has(1)); // true

// Delete a key
map1.delete(true);

// Map size
console.log(map1.size); // 2

console.log(map1);
