// Concept: This script creates a random hexadecimal color and changes the background of the web page every 1 second. It uses JavaScript timing functions to start and stop the color animation.
// This helps in creating dynamic UI effects such as animated backgrounds or color-changing themes.

// This function generates a random hex color code like #FFAA33.
const randomColor = function () {
  const hex = "0123456789ABCDEF"; // Stores all valid hexadecimal characters from 0-9 and A-F.
  let color = "#"; // Starts the color with '#', because CSS hex colors always begin with '#'.

  for (let i = 0; i < 6; i++) {
    // Runs 6 times to generate 6 hexadecimal characters (for a standard 6-digit color code).
    // Math.random() gives a value between 0 and 1. Multiplying by 16 gives a value from 0 to 15.999...
    // Math.floor() removes the decimal part, producing an integer from 0 to 15. That integer is used as an index into the 'hex' string to pick a character.
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color; // Returns the generated hex color, such as #A3D2F7.
};

let intervalId; // 'intervalId' stores the ID returned by setInterval(). This ID is needed later to stop the repeated background color updates.

// Starts the background color change process.
const startChangingColor = function () {
  if (!intervalId) {
    // If no interval is already active, create one. This prevents multiple intervals from being created accidentally.
    intervalId = setInterval(changeBgColor, 1000); // setInterval() runs the given function repeatedly every 1000 milliseconds (1 second).
  }

  // This nested function is called repeatedly by the timer.
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor(); // Access the document body and change its backgroundColor property to a new random color.
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId); // clearInterval() stops the repeated execution of the timer linked to the saved intervalId.
  intervalId = null; // Reset the intervalId to null so the start function can start a new interval later.
};

document.querySelector("#start").addEventListener("click", startChangingColor); // Select the HTML button with id="start" and attach a click listener. When the user clicks it, startChangingColor() runs.
document.querySelector("#stop").addEventListener("click", stopChangingColor); // Select the HTML button with id="stop" and attach a click listener. When the user clicks it, stopChangingColor() runs.
