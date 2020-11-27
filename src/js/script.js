const scissors = document.querySelector('.scissors-button');
const rock = document.querySelector('.rock-button');
const paper = document.querySelector('.paper-button');
const choices = [rock, paper, scissors];
let score = 0;

function gameChoice(choice) {
    if (choice === 'scissors') {
        console.log('You chose scissors');
        let computerChoiceIndex = Math.floor(Math.random() * 3);
        if (computerChoiceIndex === 0) {
            console.log('Computer won!');
            if (score > 0) {
                score--;
            } else {
                score = 0;
            }
                console.log(score);
            } else {
                if (score >= 0) {
                    score++
            }
            document.querySelector('.score-count').innerHTML = score;
            console.log('You win!');
            console.log(score);
        }
    } else {
        if (choice === 'paper') {
            computerChoiceIndex = Math.floor(Math.random() * 3);
            if (computerChoiceIndex === 2) {
                console.log('Computer won!');
                if (score > 0) {
                    score--;
                } else {
                    
                }
            }
        }
    }
}
