/*
-for...of--> loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, sets,nodeLists in browser, etc.
-Syntax--> for (let element of iterable) {
  // code block to execute
}   //Here,element: Current value in each iteration.
         iterable: An object that can be looped (like array, string, etc.)
*/

//for...of with an Array
const numbers = [10, 20, 30];
for (let num of numbers) {
  console.log(num);
  //console.log(numbers[num]); //undefined //not accepted such case in for...of
} //10 20 30

//for...in with an Array
const numbers1 = [10, 20, 30];
for (let num in numbers1) {
  console.log(num); //0 1 2
  console.log(numbers1[num]); //10 20 30
}

//for...in with an Array
const numbers2 = ["Hi", "Bye"];
for (let num in numbers2) {
  console.log(num);
} //0 1

//for...of with strings
const text = "HELLO";
for (let char of text) {
  console.log(char);
} //H E L L O

//for...of with Set
const mySet = new Set(["apple", "banana", "apple"]);
for (let item of mySet) {
  console.log(item);
} //apple banana  //here in set it will only print values that are unique

const map2 = new Map();
map2.set("IN", "India"); //procedure to set the keys and values in the map
map2.set("USA", "America");
map2.set("Fr", "France");
console.log(map2);

//for...of with map
const myMap = new Map([
  ["name", "Omkar"],
  ["age", 25],
]);
console.log(myMap); //prints-> Map(2) { 'name' => 'Omkar', 'age' => 25 }
for (let key of myMap) {
  console.log(key);
} //prints [ 'name', 'Omkar' ] [ 'age', 25 ]
for (let [key, value] of myMap) {
  console.log(key + "-> " + value);
} //prints name-> Omkar age-> 25

//for...in with maps -->(cannot be done as maps are non iterable in such calls of new Map() creations)
for (let key in myMap) {
  console.log(key);
} //not prints anything

//for...of with Objects (not possible since non iterable in for...of cases) //Note:so for...in concept works for getting Keys/Indexes of an object or array
const obj1 = {
  game1: "freefire",
  game2: "GTA Vice City",
};
console.log(obj1); //prints->{ game1: 'freefire', game2: 'GTA Vice City' }
//in case of object for..of this will throw error, as it will be non iterable
// for (let key of obj1) {
//   console.log(key);
// } //error
// for (let [key, value] of obj1) {
//   console.log(key + "-> " + value);
// } //error

//for...in with objects (key/indexes works here in for...in)
const obj2 = {
  car1: "Mercedies",
  car2: "BMW",
};
for (const key in obj2) {
  console.log(key); //car1 car2
  console.log(obj2[key]); //Mercedies BMW
}
