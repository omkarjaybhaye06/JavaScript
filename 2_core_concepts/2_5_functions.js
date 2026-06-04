/*
Function--> A function in JavaScript is a reusable block of code that performs a specific task.
            Functions help make code modular, maintainable, and reusable.
*/

//Anonymous functions
function myName() {
  //syntax-->function fun_name(parameters){} //here function us a keyword to declare a function
  console.log("Omkar");
  console.log("Jaybhaye");
}
myName(); //Note: if myName written then it is called as refernce, and if myName() is written then it will be execution of function

//parameters and argument functions
function add1(num1, num2) {
  //here num1 and num2 are called as parameters
  console.log(num1 + num2);
}
add1(3, 5); //prints 8 as 3 and 5 both are numbers. Note here (3,5)are called as arguments
add1(3, "5"); //prints 35 as we passed 2nd arhument as string so js considers both as string
add1(3, "a"); //3a
add1(3, null); //3
const sum = add1(3, 5); // prints 8 but will not store or return this value in sum
console.log("Sum is", sum); // prints undefined as we didn't return anything by the function , we only done console.log
// To overcome this we declare return inside function, and after return statement we cannot write console.log in function after return keyword.

//return Statement functions
function add2(num3, num4) {
  let result = num3 + num4;
  return result;
  //return num3+num4; //can also return directly
}
const total = add2(3, 5); //Note:here result and total are different variables
console.log("total", total); //prints total 8

// -------------------------------------------
function isLoggedIn(name) {
  if (!name) {
    //if(name===undefined){ //another way
    console.log("You didn't entered name and kept it blank");
    return; //this will take us out of function without executing below return statement
  }
  return `Hi ${name} you have logged in`;
}
// isLoggedIn("Omkar"); -->this will not print anything as we only stored result of funct in form of return but not done log here
console.log(isLoggedIn("Omkar")); //prints Hi Omkar you have logged in
console.log(isLoggedIn()); //if no argument passed then it will consider undefined
//if user not passed any argument but we want to provide one value as bydefault in such cases is done as:

//Default parameters-->
// function isLoggedIn(name="JaybhayeOmkar"){if.... till last}
function greet(name = "Guest") {
  return "Hello " + name;
}
console.log(greet()); // Hello Guest

//Rest Parameters-->used to accept unlimited arguments.
function sum1(...numbers) {
  console.log(numbers); //prints [ 1, 2, 3, 4 ]
  /*Note: function sum1(val10,val11,...numbers) {
  console.log(numbers); //prints [3, 4 ] as 1and 2 is obtained for val10 and val11*/
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum1(1, 2, 3, 4)); // 10

//Arrow functions
const square = (x) => x * x;
console.log(square(5)); // 25

// Callback functions--> Function passed as an argument to another function
function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}
greetUser("Omkar", function () {
  console.log("Welcome!");
});

// IIFE (Immediately Invoked Function Expression)-->runs as soon as it is defined.
//(function declaration)(function call without func name)
(function () {
  console.log("This runs immediately");
})(); //here ; is important to execute upcoming codes

(function shop() {
  console.log(
    "Same like normal func, but in iife this fun is wrapped in () and called using () with writing func name again",
  );
})();
//another way using arrow functions-
(() => {
  console.log(
    "IIFE for arrow function without passing any arguments or parameters",
  );
})();
((name) => {
  console.log(
    `Hi ${name}, IIFE for arrow function by passing any arguments or parameters`,
  );
})("Omkar");

//Function Hoisting--> Function declarations are hoisted to the top of their scope.
sayHello();
function sayHello() {
  console.log("Hello");
}

// sayHello1(); // Error //Cannot access 'sayHello1' before initialization //Function expressions are not hoisted:
// const sayHello1 = function () {
//   console.log("Hello");
// };

// ---------------------------------
//Calling Object values inside function using parameter as obj_name or anyother_name.key_name
const user = {
  username: "Omkar",
  phone: 9991110001,
};
function handleuser(anyobjname) {
  //parameter name can differ than exact obj_name
  return `Hi ${anyobjname.username} calling ${anyobjname.phone}`;
}
console.log(handleuser(user)); //argument name should be same as object declared name //prints Hi Omkar calling 9991110001
/*other way-we can directly pass whole object inside function declared
console.log(
  handleuser({
    username: "Omkar",
    phone: 9991110001,
  })
);*/

//Calling array elements inside function
const myArray = [100, 200, 300];
function handlemyArray(tempmyArray) {
  console.log(`Array1: ${tempmyArray[0]}` + " and Array2: " + tempmyArray[1]);
}
handlemyArray(myArray); //prints Array1: 100 and Array2: 200
//other way- handlemyArray([100,200,300]) instead of declaring above, can directly declare here as well
