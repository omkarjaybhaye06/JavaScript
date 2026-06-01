/*
Variables:
 a)let: Block-scoped variable that can be reassigned. (but cannot be redeclared in the same scope)
        Example1:  let name = "John";
                      name = "Omkar"; // Reassigning the value of name
        Example2: let x = 5;
                  let x = 10;         // This will throw an error because x is already declared in the same scope

 b)const: Block-scoped variable that cannot be reassigned. 
          And initialization is mandatory for const variables. 
          Example1: const a;            // This will throw an error because const variables must be initialized
                    const a = 10;       // This is valid because const variable is initialized
          Example2: const pi = 3.14;
                          pi = 3.14159; // This will throw an error because pi is a constant

 c)var: Function-scoped (i.e global scoped) variable that can be reassigned as well as redeclared.
        Example: var age = 25;
                 var age = 30; // Redeclaring the variable age using var is allowed and will not throw an error.
                     age = 35; // Reassigning the value of age is also allowed.

*Note: Prefer using let and const over var to avoid issues related to variable hoisting and scope.
*/

const accountId = 12345;
let accountEmail = "user@example.com";
var accountPassword = "Password123";
accountCity = "Pune";
let accountState; // Declaring a variable without initializing it. It will have the value undefined by default.

// accountId = 54321; // This will throw an error because accountId is a constant and cannot be reassigned
accountEmail = "newuser@example.com"; // This will work because accountEmail is a let variable and can be reassigned
accountPassword = "NewPassword456"; // This will work because accountPassword is a var variable and can be reassigned
accountCity = "Mumbai"; // This will work because accountCity is a global variable and can be reassigned

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
