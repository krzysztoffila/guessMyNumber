'use strict'
const message = document.querySelector('.message');
const messages = ['🟥 No Number!', '🎉 Correct Number!', '📈Too high!', '📉Too low!', '💥You lost the game!']

const highscore = document.querySelector(".highscore")

const number = document.querySelector('.number');
number.textContent = "?";
let score = document.querySelector('.score');
let scoreValue = 20;
score.textContent = scoreValue;

const checkBtn = document.querySelector(".check");

const secretNumber = Math.floor(Math.random() * 20) + 1;

function checkNumber() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        message.textContent = messages[0]
    } else if (guess === secretNumber) {
        message.textContent = messages[1]
        number.textContent = secretNumber;
        document.body.style.backgroundColor = "#60b347";
        highscore.textContent = scoreValue
    } else if (guess > secretNumber) {
        if (scoreValue > 1) {
            message.textContent = messages[2];
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            message.textContent = messages[4];
            score.textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (scoreValue > 1) {
            message.textContent = messages[3];
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            message.textContent = messages[4];
            score.textContent = 0;
        }

    }
    console.log(secretNumber)
}


checkBtn.addEventListener('click', checkNumber)