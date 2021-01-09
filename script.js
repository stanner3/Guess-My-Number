'use strict';

// The secret number for user to guess
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// User score
let score = 20;
// User's highest score
let highscore = 0;

// Adding secretNumber to class number replacing ?mark
document.querySelector('.number').textContent = secretNumber;

// When check button is pressed
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = '🎉 CorrectNumber!';
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

    }
});

