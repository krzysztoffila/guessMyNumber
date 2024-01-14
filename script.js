'use strict'

const message = document.querySelector('.message');
message.textContent = '🎉 Correct Number!';

const number = document.querySelector('.number');
number.textContent = "?";

const score = document.querySelector('.score');
score.textContent = 20;

const inputNumber = document.querySelector('.guess');
inputNumber.value = 23;