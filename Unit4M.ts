/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-12-07
 * @fileoverview This program is a guessing Game using functions.
 */

// welcome message
console.log("Welcome to the Guessing Game!");
console.log("Guess a number between 1 and 10. Enter 0 to quit.");

// generate random number between 1 and 10
const randomNumber: number = Math.floor(Math.random() * 10) + 1;

// variable to store user guess
let userGuess: number = -1;

// start the guessing loop
while (userGuess !== 0 && userGuess !== randomNumber) {
  // get user input
  userGuess = Number(prompt("Enter your guess: "));

  // check if user wants to quit
  if (userGuess === 0) {
    console.log("You chose to quit. Goodbye!");
    break;
  }

  // compare guess with random number
  if (userGuess === randomNumber) {
    console.log(`Congratulations! You guessed the correct number: ${randomNumber}`);
    break;
  } else {
    console.log("Try again.");
  }
}

console.log("\nDone.");
