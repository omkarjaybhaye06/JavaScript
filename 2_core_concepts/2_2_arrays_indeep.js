const car1 = ["A", "B", "C"];
const car2 = ["D", "E", "F"];
const car3 = ["G", "H", "I"];
const car4 = ["J", "K", "L"];
const car5 = ["MN", "OP", "Q"];

//length--> returns the number of elements in an array
console.log(car1.length); //prints 3

//push
car1.push(car2); //here original array i.e car1 gets change //it push array inside array
console.log(car1, typeof car1); //prints ['A','B','C',['D','E','F']] -->any array is of type object
console.log(car1[3][1]); //prints "E"

//concat
car3.concat(car4); //This will not change original array, we need to create new array variable eg. arr5
console.log(car3); //prints ['G', 'H', 'I' ]
car6 = car3.concat(car4);
console.log(car6); //not includes array in array //prints [ 'G', 'H', 'I', 'J', 'K', 'L' ]

//spread operator(...var_name)--> expand elements of an iterable (like arrays, strings, or objects) into individual elements.
car7 = [...car4, ...car5]; //merge two objects.
console.log(car7); //prints [ 'J', 'K', 'L', 'MN', 'OP', 'Q' ] -->//when string is given as element within array eg.MN, then even using ...spread operator, normally string element will not get separated
car8 = "Hello Welcome";
console.log(...car8); //prints H e l l o   W e l c o m e

//updating and copying objects
const car9 = { brand: "Lamborgini", price: 5000000 };
const newcar9 = { ...car9, price: 6500000 };
console.log(newcar9); //prints { brand: 'Lamborgini', price: 6500000 } //here we are creating new object with the help of spread operator and updating price property of car9 object. This is how we can update objects without modifying original object.

//flat()--> creates a new array with all sub-array elements concatenated into it, recursively up to the specified depth
const car10 = [1, 3, 2, [5, 2, 9, 14, [22, 54]], [16, 52, 34, 41, 42]];
// const newcar10 = car10.flat(1);
const newcar10 = car10.flat(Infinity); //infinity will remove all depths from an array
console.log(newcar10);

//Note :We can convert any values like strings into array using Array.from()
console.log(Array.isArray("Omkar")); // prints false as this is string, not array
console.log(Array.from("Omkar")); // converts string to array //prints [ 'O', 'm', 'k', 'a', 'r' ]
console.log(Array.from(587)); //will print empty array [] as compiler was unable to convert this object into array
console.log(Array.from({ name: "Omkar", age: 24 })); //will print empty array [] as compiler was unable to convert this object into array

//Array.of()-->returns the new array from the set of elements.
let arr1 = 100;
let arr2 = 200;
console.log(Array.of(arr1, arr2)); //prints [ 100, 200 ] //here we are creating array using Array.of() method and passing arr1 and arr2 as elements of array.
