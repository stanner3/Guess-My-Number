'use strict';

// The secret number for player to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Player score
let score = 20;
// Player highest score
let highscore = 0;



// When check button is pressed
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
        // When player wins
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = '🎉 CorrectNumber!';
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'
        // Adding secretNumber to class number replacing ?mark
        document.querySelector('.number').textContent = secretNumber;
        // When guess is too high  
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }


        // When guess is too low  
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
// Reset game by pressing Again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;


    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
    // Adding secretNumber to class number replacing ?mark
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
});

