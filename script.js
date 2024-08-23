let randomNum;
let attempts = 0;
const feedback = document.getElementById('feedback');
const result = document.getElementById('result');
const attemptsDisplay = document.getElementById('attempts');

function initializeGame() {
    randomNum = Math.floor(Math.random() * 100); // Random number between 0 and 99
    attempts = 0;
    feedback.textContent = "Guess the number between 0 and 99!";
    result.textContent = "";
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    document.getElementById('userGuess').value = '';
}

function guessNumber() {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess)) {
        feedback.textContent = "Please enter a valid number.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNum) {
        feedback.textContent = `Congratulations! You've guessed the number in ${attempts} attempt(s)!`;
        result.textContent = `The correct number was ${randomNum}.`;
        result.style.color = '#28a745'; // Green for success
    } else if (userGuess > randomNum) {
        feedback.textContent = "Your guess is too high. Try a lower number.";
        result.textContent = "";
    } else if (userGuess < randomNum) {
        feedback.textContent = "Your guess is too low. Try a higher number.";
        result.textContent = "";
    }
}

function restartGame() {
    initializeGame();
}

// Initialize game on page load
initializeGame();
