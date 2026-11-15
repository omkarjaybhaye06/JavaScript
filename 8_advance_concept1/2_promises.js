// promises in javascript:
// A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

// A promise can be in one of three states:
// 1. Pending: The initial state of a promise. The operation has not completed yet.
// 2. Fulfilled: The operation completed successfully, and the promise has a resulting value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.

// Creates a new Promise.
// A callback used to initialize the promise. This callback is passed two arguments:
// a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.

//1---------------------
const myPromiseOne = new Promise((resolve, reject) => {
  // The timer simulates work that finishes asynchronously after one second.
  setTimeout(function () {
    console.log("Async call executed");
    resolve(); // resolve is called when the asynchronous operation is successful, and it can pass a value to the then() method.
  }, 1000);
});
// The then() method is used to specify what should happen when the promise is fulfilled. i.e when resolve is executed/fulfilled.
myPromiseOne.then(() => {
  console.log("Promise resolved"); // this runs after "Async call executed".
});

// 2nd way to write ----------------
// after one second, the messages below are printed in order.
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// 3----------------------
const promiseThree = new Promise(function (resolve, reject) {
  // A fulfilled promise can pass an object to the next then() callback.
  // Here in resolve the object data is passed/ can say fulfilled, hence as this is fulfilled and we need to fetch or display that resolved data then an argument for object in then().
  setTimeout(function () {
    resolve({ username: "oops", email: "oops@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // { username: "oops", email: "oops@example.com" }.
});

//4.1---------------------
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Omkar", password: "Password123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    // This block runs only when the promise is fulfilled.
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    // Expected result with error = true: "ERROR: Something went wrong".
    console.log(error);
  })
  // finally() runs whether the promise is fulfilled or rejected.
  .finally(() => console.log("The promise is either resolved or rejected"));

// 4.2--------------------
const promiseFourTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Omkar", password: "Password123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFourTwo
  .then((user) => {
    // Execution reaches this callback only when promiseFourTwo is fulfilled.
    // The resolved user object is received as the `user` argument.
    console.log(user);
    // Returning the username passes it to the next `.then()` callback.
    return user.username;
  })
  .then((username) => {
    // This callback runs after the previous callback returns the username.
    console.log(username); // Expected result here when the promise succeeds now: "Omkar" is printed.
  })
  .catch(function (error) {
    console.log(error);
  })
  // finally(): The callback to execute when the Promise is settled (fulfilled or rejected). it runs whether the promise is fulfilled or rejected.
  .finally(() => console.log("The promise is either resolved or rejected"));

// 5---------------------Other way to use async await instead of then().

// // async/await versus .then().catch():
// Both use Promises. async/await is usually easier to read.
// .then() handles success; try/catch handles errors.
// Limitation: await is used inside async functions, and multiple awaits run in order. Use Promise.all() when independent operations should run together.

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      // resolve() sends this object to await.
      resolve({ username: "javascript", password: "123" });
    } else {
      // reject() sends the error to catch.
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});
// async functions always return a Promise.
async function consumePromiseFive() {
  try {
    // await pauses this function until the Promise finishes. It does not block the rest of the program.
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    // catch handles a rejected Promise, like .catch() does.
    console.log(error); // Use `throw error` if the caller must also receive the error.
  }
}
// The function starts, pauses at await, and continues after one second.
consumePromiseFive();

// ***********-----------------------*******--------------

/* fetch() in javascript:
In JavaScript, the Fetch API is used to make HTTP requests and communicate with servers and APIs. It allows you to retrieve or send data asynchronously.
It allows JavaScript to retrieve data, send data, and interact with REST APIs without reloading the webpage.
Syntax- fetch(url, options); //url – API endpoint or resource URL. 1. options – Optional configuration object containing HTTP method, headers, body, credentials, etc.

Before Fetch API, developers used XMLHttpRequest (XHR) to communicate with servers asynchronously.
XHR works, but its callback-based API can become complicated.It uses 'responseText'. however fetch API is Promise-based.It uses 'response.json()'.
In 2015 fetch Fetch became a modern in browser web APIs as Promise-based alternative to XHR, offering a cleaner interface for HTTP requests.In 2022, node officially integrated fetch library into its runtime environment.

Internal Working of fetch API-
-JavaScript calls fetch()-->Browser sends HTTP request-->Server processes request-->Server sends HTTP response-->Fetch returns a Promise containing Response-->Read response body (JSON, text, Blob, etc.)
-Note:
-fetch() returns a Promise that resolves to a Response object, not directly to the API data.
-in real api response note that if api throws 400,401,500,501,...or any such response it is not consider as error and hence not goes in reject promise, instead as we got response it comes under resolve state condition.
*/
// -------------------------way1- basic get request by default used by fetch

// Defines an asynchronous function for fetching all users.
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //fetch() sends the HTTP request.
    // Converts the JSON response body into JavaScript data.
    const data = await response.json(); //await waits for the Promise to settle. response contains the HTTP response. response.json() reads and parses the response body.
    console.log(data); //here data contains the actual JavaScript data.
  } catch (error) {
    console.log("error is:", error); //Handles network or response-parsing errors.
  }
}
getAllUsers(); // Calls the asynchronous function and starts the request.

//----------------------way2- using async and await

// Sends a GET request to the GitHub user API.
fetch("https://api.github.com/users/omkarjaybhaye")
  .then((response) => {
    return response.json(); // Converts the response body from JSON text into JavaScript data.
  })
  .then((data) => {
    console.log(data); // Displays the GitHub user data in console.
  })
  .catch((error) => console.log(error)); // Handles errors from the request or JSON conversion.
