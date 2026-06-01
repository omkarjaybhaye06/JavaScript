// Dates

let myDate = new Date(); // creates a new Date object with the current date and time
console.log(myDate); // current date and time
console.log(myDate.toString()); // Tue Jun 02 2026 00:30:50 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Tue Jun 02 2026
console.log(myDate.toTimeString()); // 00:30:50 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 6/2/2026, 12:30:50 AM
console.log(typeof myDate); // object

// Creating Date objects with specific date and time
let myCreatedDate = new Date(2026, 3, 6);
let myCreatedDate1 = new Date(2026, 3, 6, 5, 3);
let myCreatedDate2 = new Date("2026-04-06");
let myCreatedDate3 = new Date("04-06-2026");
console.log(myCreatedDate.toLocaleString()); // 4/6/2026, 12:00:00 AM
console.log(myCreatedDate1.toLocaleString()); // 4/6/2026, 5:03:00 AM
console.log(myCreatedDate2.toLocaleString()); // 4/6/2026, 12:00:00 AM
console.log(myCreatedDate3.toLocaleString()); // 4/6/2026, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  // to get the weekday name
  weekday: "long",
});
