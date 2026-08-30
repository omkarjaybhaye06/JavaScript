// Generate a random integer between 1 and 100 (inclusive)
let randomNumber = parseInt(Math.random() * 100 + 1);

// Get references to important DOM elements used by the game
const submit = document.querySelector("#subt"); // submit button element
const userInput = document.querySelector("#guessField"); // text input where user types guesses
const guessSlot = document.querySelector(".guesses"); // element that displays previous guesses
const remaining = document.querySelector(".lastResult"); // element that shows guesses remaining
const lowOrHi = document.querySelector(".lowOrHi"); // element that shows hint messages (low/high/correct)
const startOver = document.querySelector(".resultParas"); // container used to show the restart button

// Create a paragraph element that will be used later as a "Start new Game" control
const p = document.createElement("p");

// Track previous guesses in an array and how many guesses have been made
let prevGuess = []; // stores numeric guesses entered by the user
let numGuess = 1; // current guess count (starts at 1)

// Flag indicating whether the game is currently playable
let playGame = true;

// Only attach the submit handler when the game is active
if (playGame) {
  // When the submit button is clicked, prevent the form from reloading the page,
  // parse the input value as an integer, and validate it
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value); // convert input string to number
    console.log(guess); // debug: log the guess value to the console
    validateGuess(guess); // run validation and game logic
  });
}

// Validate the user's guess before processing it
function validateGuess(guess) {
  // If input is not a number, prompt the user
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    // Ensure number is at least 1
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    // Ensure number is at most 100
    alert("PLease enter a  number less than 100");
  } else {
    // Valid guess: record it and either end game if out of tries or continue
    prevGuess.push(guess);
    if (numGuess === 11) {
      // When numGuess is 11 it means the user already used 10 attempts (count started at 1)
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      // Show guess and check whether it's high/low/correct
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Compare the user's guess to the random number and display feedback
function checkGuess(guess) {
  if (guess === randomNumber) {
    // Correct guess
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    // Guess is too low
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    // Guess is too high
    displayMessage(`Number is TOOO High`);
  }
}

// Update the UI to show the latest guess and remaining attempts
function displayGuess(guess) {
  userInput.value = ""; // clear the input field for the next guess
  guessSlot.innerHTML += `${guess}, `; // append the guess to the previous guesses display
  numGuess++; // increment the number of guesses made
  remaining.innerHTML = `${11 - numGuess} `; // update guesses remaining (showing remaining attempts)
}

// Show hint or result messages to the user in the lowOrHi element
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`; // inject the message wrapped in an <h2>
}

// Handle end-of-game UI changes and prepare restart control
function endGame() {
  userInput.value = ""; // clear input
  userInput.setAttribute("disabled", ""); // disable input while game is over
  p.classList.add("button"); // style the paragraph like a button
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // create an inner element with id used to restart
  startOver.appendChild(p); // add the restart control to the DOM
  playGame = false; // mark the game as not active
  newGame(); // wire up the restart handler
}

// create handler for the "Start new Game" control and reset game state
function newGame() {
  const newGameButton = document.querySelector("#newGame"); // find the restart element
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1); // pick a new random number
    prevGuess = []; // clear previous guesses
    numGuess = 1; // reset guess counter
    guessSlot.innerHTML = ""; // clear displayed guesses
    remaining.innerHTML = `${11 - numGuess} `; // reset displayed remaining guesses
    userInput.removeAttribute("disabled"); // re-enable the input field
    startOver.removeChild(p); // remove the restart control from the DOM

    playGame = true; // allow the game to be played again
  });
}
