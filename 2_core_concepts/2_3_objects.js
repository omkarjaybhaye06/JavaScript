/*
Objects: -Collection of properties, where each property is a key-value pair. -Comes under non-premitive datatype.
         -Objects can declared in 2 ways-->1. using literals  2. using constructors(if used then singleton objects are created by default)
         
*/
const symbol1 = Symbol("substraction"); //only defining symbol datatype  to access in object due to different syntax in key:value pairs
//Object Literals
const details1 = {
  //created object and gave  key(string by default):value( can be of any datatype eg. string/number/object-eg.array list) format.
  name: "Omkar", //Note: key(lets say eg.name) is always considers as string by default so, can also write as "name" or name
  age: 24,
  location: "Pune",
  [symbol1]: "addition", //different sytax for using symbol in objects
  email: "omkarjaybhaye__@gmail.com",
  isEmployee: true,
  loginDays: ["Wednesday", "Thursday"],
};
console.log(details1);
console.log(details1.location); //accessed using dot notation
console.log(details1["location"]); //accessed using brackets notation
console.log(details1[symbol1]); //prints addition //different syntax for symbol, here "" is not used for key
console.log(details1.loginDays);

details1.email = "jaybhayeomkar@gmail.com"; //updating values in objects
console.log(details1["email"]);
//Note:freeze()-->Prevents modification of existing property,attributes and values, and prevents the addition of new properties.
// Object.freeze(details1);
details1.email = "omkar@gmail.com"; //updating values in objects
console.log(details1["email"]); //prints jaybhayeomkar@gmail.com means changes are freezed and nor reflected
console.log(details1);

details1.greeting = function () {
  console.log("Hi I'm function");
};
console.log(details1.greeting()); //prints Hi I'm function //since we have called greeting() function
console.log(details1.greeting); //here we not passed greeting as function so, func not got executed but gives the reference only //prints function(anonymous)

details1.thiskey = function () {
  console.log(`Hi ${this.name}`); //this. will point to exact property inside the object
};
console.log(details1.thiskey());

//using constructors:
// Object.create(); //just for information
