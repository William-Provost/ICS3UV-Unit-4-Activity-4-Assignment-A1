// Author: William Provost
// Version: 1.0.0
// Date: 2025-12-02
// Fileoverview: This program is a guessing Game using functions.

// function to generate random integer 1–10
function generateRandom(): number {
  return Math.floor(Math.random() * 10) + 1;
}

console.log("Welcome to the Guessing Game!");
console.log("Guess a number between 1 and 10. Enter 0 to quit.");

let randomNumber = generateRandom();
let guess = Number(prompt("Enter your guess: "));

// main loop
while (guess !== 0 && guess !== randomNumber) {
  console.log("Try again.");
  guess = Number(prompt("Enter your guess: "));
}

if (guess === 0) {
  console.log("Game ended. Goodbye!");
} else {
  console.log(`Congratulations! You guessed the correct number: ${randomNumber}`);
}

console.log("\nDone.");
