'use strict';

// displayMessage('Do not Guess';
// document.querySelector('.number').textContent = '50';
// document.querySelector('.guess').value = '50';

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = Number(document.querySelector('.highscore').textContent);
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const givenNumber = Number(document.querySelector('.guess').value);
  // Player Lost the Game
  if (score === 1) {
    score--;
    displayMessage('You Lost the Game');
    document.querySelector('.score').textContent = score;
  } else if (score > 0) {
    // Checking check only if Score is greater than zero to elimate Negative scores
    if (!givenNumber) {
      //checking for no numbers
      displayMessage('No Number🧐');
    } else if (secretNumber == givenNumber) {
      //cheking Correct Number
      displayMessage('Correct Guess😘');
      document.querySelector('.number').textContent = secretNumber;
      // Calculating the HiggScore
      if (highScore < score) {
        highScore = score;
        console.log(score);
        document.querySelector('.highscore').textContent = score;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
    } else if (secretNumber > givenNumber) {
      //Guessed small number
      displayMessage('Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (secretNumber < givenNumber) {
      //Guessed Large number
      displayMessage('Too High');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
