'use strict';// it is showing the error

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//start guessing message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// atfer clicking on click button  function of guessing  the number is executed, it guess the input value convert into number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); 

  // When there is no input
  if (!guess) {
    // it print at the Start guessing... text 
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber; //it print secrete number at ? 
   //for animation we change the colour and font 
    document.querySelector('body').style.backgroundColor = '#60b347';  
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;  // swap the score with highscore and print at highscore text
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;  // it reduced the initial score to 1 
      document.querySelector('.score').textContent = score; // and printed at score text
    } 
    else
     {   
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
