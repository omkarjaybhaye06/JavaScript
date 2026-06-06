const name = "Omkar";
const score1 = 500;
const isLoggedIn = true;
// <, >, <=, >=, ==, !=, ===, !==

if (isLoggedIn) console.log("Logged In");
if (name) {
  console.log(`Hello ${name}`);
}
if (name == "Omkar") console.log("Hi Omkar");
console.log("Good Afternoon");

if (score1 >= 500) {
  let totalmarks = 800;
  console.log(`Total marks obtained ${totalmarks}`);
  //score1 = 600; //cannot reassign value to const variable, to change value make const score1 as let score1
  console.log(score1);
  console.log("Passed");
} else {
  console.log("Failed");
}
//console.log(`Totalmarks cannot be printed out of scope ${totalmarks}`); //cannot access outof scope
console.log("Mission completed");

//Nested else if:
const balance = 1000;

if (balance > 500) (console.log("test"), console.log("test2")); //bad practice, avoid doing such things

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

//&& and || Operators:
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}
if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Not allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
