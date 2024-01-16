'use strict'
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const highscore = document.querySelector(".highscore")
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector('.again');
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = document.querySelector('.score');
let scoreValue = 20;
let highscoreValue = 0;

number.textContent = "?";
score.textContent = scoreValue;

const messages = {
    noNumber: '🟥 No Number!',
    win: '🎉 Correct Number!',
    highNumber: '📈Too high!',
    lowNumber: '📉Too low!',
    gameOver: '💥You lost the game!'
}

function checkNumber() {
    let guess = Number(document.querySelector('.guess').value);
    // When guess is no input
    if (!guess) {
        message.textContent = messages.noNumber
        //  When player wins
    } else if (guess === secretNumber) {
        message.textContent = messages.win
        number.textContent = secretNumber;
        document.body.style.backgroundColor = "#60b347";
        number.style.width = '30rem'

        if (scoreValue > highscoreValue) {
            highscoreValue = scoreValue;
            highscore.textContent = highscoreValue;
        }

        // When guess is too high
    } else if (guess > secretNumber) {
        if (scoreValue > 1) {
            message.textContent = messages.highNumber;
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            message.textContent = messages.gameOver;
            score.textContent = 0;
        }
        // When guess is top low
    } else if (guess < secretNumber) {
        if (scoreValue > 1) {
            message.textContent = messages.lowNumber;
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            message.textContent = messages.gameOver;
            score.textContent = 0;
        }

    }
    console.log(secretNumber)
}

function resetGame() {
    scoreValue = 20
    secretNumber = Math.floor(Math.random() * 20) + 1;

    number.textContent = "?";
    message.textContent = 'Start guessing..'
    score.textContent = scoreValue;
    document.querySelector('.guess').value = ''

    number.style.width = '15rem';
    document.body.style.backgroundColor = "#222";
}

checkBtn.addEventListener('click', checkNumber)
againBtn.addEventListener('click', resetGame)