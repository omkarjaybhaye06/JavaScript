const user1 = new Object(); //1st way to declare object
const user2 = {}; //2nd way to declare obkect
console.log(user1, user2); //prints empty object {}

user2.id = "121";
user2.name = "Omkar";
user2.iseligible = true;
console.log(user2);

//creating object inside object
const user3 = {
  email: "omkar@gmail.com",
  fullname: {
    myname: {
      firstname: "Omkar",
      lastname: "Jaybhaye",
    },
  },
  PhoneNumber: 1122334455,
};
console.log(user3);
console.log(user3.fullname);
console.log(user3.fullname.myname.lastname);

//Merging 2 or more objects:
const user5 = { 1: "one", 2: "two" };
const user6 = { 3: "three", 4: "four" };
// const user7= {user5, user6}
// console.log(user7); //causes problem,merges 2nd object inside 1st object as child

/*
Object.assign()--> -Copy properties from one or more source objects to a target object.
                   -Merge multiple objects into one. -Clone an object (shallow copy).
                   -Object.assign(target, source1, source2)// here target is object to receive values
*/
//3days to merge 2 or more objects.
target = {};
const user8 = Object.assign({}, user5, user6);
const user9 = Object.assign(target, user5, user6);
const user10 = { ...user5, ...user6 };
console.log(user8); //prints { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }
console.log(user9); //prints { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }
console.log(user10); //prints { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

//Array of Objects:
const item = [
  {
    name: "Omkar",
    age: 23,
  },
  {
    name: "Omkar2",
    age: 24,
  },
  {
    email: "omkar@gmail.com",
    PhoneNumber: 9182736,
  },
];
console.log(item[1].age); //prints 24
console.log(Object.keys(item)); //prints 0 1 2//since item is array and arrays list considers index 01234... as its keys internally

console.log(user2); //user2 is object
console.log(Object.keys(user2)); //provides keys of Object user2 in array list format type //prints [ 'id', 'name', 'iseligible' ]
console.log(Object.values(user2)); //gives all values present in object
console.log(Object.entries(user2)); //creates each key:value pair as one array list //prints [ [ 'id', '121' ], [ 'name', 'Omkar' ], [ 'iseligible', true ] ]
console.log(user2.hasOwnProperty("iseligible")); //prints true
console.log(user2.toLocaleString());

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

const obj = {};
console.log(obj.toString()); // "[object Object]"

const date = new Date();
console.log(date.toLocaleString()); // e.g., "6/14/2025, 8:23:00 PM"

const obj2 = { name: "Omkar" };
console.log(obj2.propertyIsEnumerable("name")); // true
console.log(obj2.propertyIsEnumerable("toString")); // false (inherited)

function Animal() {}
const dog = new Animal();
console.log(Animal.prototype.isPrototypeOf(dog)); // true //checks if one object exists in prototype chain of another

//valueOf()
const numObj3 = new Number(10);
console.log(numObj3.valueOf()); // 10
const obj3 = { a: 1 };
console.log(obj3.valueOf()); // { a: 1 }

//__proto__--> Gives direct access to an object’s prototype.
const animal1 = { eat: true };
const dog1 = { __proto__: animal1 };
console.log(dog1.eat); // true
console.log(Object.getPrototypeOf(dog1)); //prints {eat: true}
console.log(Object.setPrototypeOf(dog1, animal1)); //prints {} //sets prototype of dog1 to animal1
console.log(Object.getPrototypeOf(dog1)); //prints {eat: true} //now prototype of dog1 is animal1);

// ---------------------------------------
//Destructuring Objects--> unpacking values from an object (or array) into individual variables
const car1 = {
  brand: "Toyota",
  price: 2500000,
  highSpeed: "160kmph",
};
console.log(car1.highSpeed);

//-->instead of calling each value again and again by obj_name.key_name, we can declare first it as const {key_name}= obj_name then call directly log(key_name).
const { price } = car1;
console.log(price);

const { highSpeed: Speed } = car1; //Note: we can change name of key in object as {old_key_name: new_key_name}= obj_name
console.log(Speed);

/*
Additional Note: In react we use same descructuring concept. Instead of mentioning prop.key_name we directly give {key_name}.
const head=({logo})=>{ //instead of head=(props.logo)=>{

};
console.log(head(logo="reacticon"));
*/

console.log("********************API Concept***********");
/*Values from Api either come in XML form or JSON form(nowadays JSON almost)
JSON format syntax { }
*/
// { //Syntax of json { } or in form of array and sub-objects inside array list [{},{},{}]
//   "name":"Omkar",
//   "surname":"Jaybhaye",
//   "age":23 //Note: in json key are declared manually as string"""
// }
