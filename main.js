let computerChoice;
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
   
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
         computerChoice = 'paper';
    } else if (randomNumber === 3)  {
         computerChoice = 'scissors';
    }

    return computerChoice.toLowerCase();
}



let playerSelection;
function userPlay() {
    playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
    
    while(true) {
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
            return playerSelection;
        } else {
            playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
        }
    }
}

function playRound(playerSelection, computerPlay) { 
        let msg;
     
        if (playerSelection === 'rock' && computerPlay === 'scissors') {
            msg = 'You Win! Rock beats Scissors';
        } else if (playerSelection === 'paper' && computerPlay === 'rock') {
            msg = 'You Win! Paper beats Rock';
        } else if (playerSelection === 'scissors' && computerPlay === 'paper') {
            msg = 'You Win! Scissors beats Paper'
        } else if (playerSelection === computerPlay) {
            msg = "It's a Tie!"
        } else {
            msg = 'You Lose!';
        }
    
        return msg;
}

function game(playRound) {
    let computerScore = 0;
    let userScore = 0;

    for (let i = 1; i < 6; i++) {
        let message = playRound(userPlay(), computerPlay());
        
        if(message.includes('Win')) {
            ++userScore;
            console.log(`You won this round. ${playerSelection} beats ${computerChoice} Current score is ` + userScore + ': ' + computerScore);
        } else if (message.includes('You Lose!')) {
            ++computerScore;
            console.log(`You lost this round. ${computerChoice} beats ${playerSelection} Current score is ` + userScore + ': '+ computerScore);
        } else if (message.includes('Tie')) {
            console.log(`It's a tie. Current score is ` + userScore + ': ' + computerScore);
        } 
    }
}


console.log(game(playRound));