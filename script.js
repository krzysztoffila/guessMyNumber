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
    correctNumber: '🎉 Correct Number!',
    highNumber: '📈Too high!',
    lowNumber: '📉Too low!',
    gameOver: '💥You lost the game!'
}

function showMessage(element, message) {
    element.textContent = message
}

function checkNumber() {
    let guess = Number(document.querySelector('.guess').value);
    // When guess is no input
    if (!guess) {
        showMessage(message, messages.noNumber)
        //  When player wins
    } else if (guess === secretNumber) {
        showMessage(message, messages.correctNumber)
        showMessage(number, secretNumber)
        document.body.style.backgroundColor = "#60b347";
        number.style.width = '30rem'
        // set highscore
        if (scoreValue > highscoreValue) {
            highscoreValue = scoreValue;
            showMessage(highscore, highscoreValue)
        } // When guess is wrong
    } else if (guess !== secretNumber) {
        if (scoreValue > 1) {
            showMessage(message, guess > secretNumber ? messages.highNumber : messages.lowNumber)
            // message.textContent = guess > secretNumber ? messages.highNumber : messages.lowNumber
            scoreValue--;
            showMessage(score, scoreValue)
        } else {
            showMessage(message, messages.gameOver)
            score.textContent = 0;
        }
    }
    // DON'T CHEAT!
    console.log(secretNumber)
}

function resetGame() {
    scoreValue = 20
    secretNumber = Math.floor(Math.random() * 20) + 1;
    showMessage(number, "?")
    showMessage(message, 'Start guessing..')
    showMessage(score, scoreValue)
    document.querySelector('.guess').value = ''

    number.style.width = '15rem';
    document.body.style.backgroundColor = "#222";
}

checkBtn.addEventListener('click', checkNumber)
againBtn.addEventListener('click', resetGame)