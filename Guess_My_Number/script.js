'use script';

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*
    SecretNumber is the number to fund
    score the oportuniti to find them
    highscore your attempt
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

const displayHighScore = function displayHighScore() {
    document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //console.log(guess, typeof guess);
    console.log(secretNumber, typeof secretNumber);

    if (!guess) {
        if (document.querySelector('.score').textContent >= 1) {
            displayMessage('⛔️ Number Empty!');
            document.querySelector('.score').textContent -= 1;
        } else {
            displayMessage('💥 You lost the game!');
            displayHighScore();
        }

    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = guess;
        displayHighScore();

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    } else if (guess !== secretNumber) {

        if (document.querySelector('.score').textContent >= 1) {
            document.querySelector('.score').textContent -= 1;
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        } else {
            displayMessage('💥 You lost the game!');
            displayHighScore();
        }

    }

});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing..');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});


