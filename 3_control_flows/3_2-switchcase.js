// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const monthDate = 3;
switch (monthDate) {
  case 20:
    console.log("Date is 20");
    break;
  default:
    console.log("31 by default");
}
console.log("-----------------");

const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break; //if break is not written, then once condition gets true then the cireent one as well as below lines gets to be printed.
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}
