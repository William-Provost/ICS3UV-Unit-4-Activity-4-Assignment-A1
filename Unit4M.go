// Author: William Provost
// Version: 1.0.0
// Date: 2025-12-02
// Fileoverview: This program is a guessing Game using functions.

package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

// function to generate random integer 1–10
func generateRandom() int {
	return rand.Intn(10) + 1
}

func main() {
	rand.Seed(time.Now().UnixNano())

	reader := bufio.NewScanner(os.Stdin)

	fmt.Println("Welcome to the Guessing Game!")
	fmt.Println("Guess a number between 1 and 10. Enter 0 to quit.")
	fmt.Print("Enter your guess: ")

	reader.Scan()
	guess, _ := strconv.Atoi(strings.TrimSpace(reader.Text()))

	randomNumber := generateRandom()

	for guess != 0 && guess != randomNumber {
		fmt.Println("Try again.")
		fmt.Print("Enter your guess: ")
		reader.Scan()
		guess, _ = strconv.Atoi(strings.TrimSpace(reader.Text()))
	}

	if guess == 0 {
		fmt.Println("Game ended. Goodbye!")
	} else {
		fmt.Printf("Congratulations! You guessed the correct number: %d\n", randomNumber)
	}

	fmt.Println("\nDone.")
}
