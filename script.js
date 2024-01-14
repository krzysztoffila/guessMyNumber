'use strict'

const message = document.querySelector('.message');
message.textContent = '🎉 Correct Number!';

const number = document.querySelector('.number');
number.textContent = "?";

const score = document.querySelector('.score');
score.textContent = 20;



const checkBtn = document.querySelector(".check")

function checkNumber() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        message.textContent = '🚩 No Number!'
    }
}


checkBtn.addEventListener('click', checkNumber)