'use strict'
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const highscore = document.querySelector(".highscore");
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
    correctNumber: '🎉 Correct Number!',
    highNumber: '📈Too high!',
    lowNumber: '📉Too low!',
    gameOver: '💥You lost the game!'
}

function displayMessage(element, message) {
    element.textContent = message;
}

function setWidthAndBgColor(width, backgroundColor) {
    document.body.style.backgroundColor = backgroundColor;
    number.style.width = width;
}

function checkNumber() {
    let guess = Number(document.querySelector('.guess').value);
    // When guess is no input
    if (!guess) {
        displayMessage(message, messages.noNumber);
        //  When player wins
    } else if (guess === secretNumber) {
        displayMessage(message, messages.correctNumber);
        displayMessage(number, secretNumber);
        setWidthAndBgColor('30rem', "#60b347");

        if (scoreValue > highscoreValue) {
            highscoreValue = scoreValue;
            displayMessage(highscore, highscoreValue);
        } // When guess is wrong
    } else if (guess !== secretNumber) {
        if (scoreValue > 1) {
            displayMessage(message, guess > secretNumber ? messages.highNumber : messages.lowNumber);
            scoreValue--;
            displayMessage(score, scoreValue);
        } else {
            displayMessage(message, messages.gameOver);
            score.textContent = 0;
        }
    }
    // DON'T CHEAT!
    // console.log(secretNumber)
}

function resetGame() {
    scoreValue = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    displayMessage(number, "?");
    displayMessage(message, 'Start guessing..');
    displayMessage(score, scoreValue);
    document.querySelector('.guess').value = '';
    setWidthAndBgColor('15rem', "#222");
}

checkBtn.addEventListener('click', checkNumber);
againBtn.addEventListener('click', resetGame);