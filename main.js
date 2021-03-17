let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

let scoreInfo = document.querySelector('.score-title');
let scoreMsg = document.querySelector('.score-msg');

let playerPoints = 0;
let computerPoints = 0;

let btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('rock')) {
      selection('rock');
    } else if (e.currentTarget.classList.contains('paper')) {
      selection('paper');
    } else if (e.currentTarget.classList.contains('scissors')) {
      selection('scissors');
    }
  });
});

function selection(playerChoice) {
  let playerSelection = playerChoice;
  playRound(playerSelection, computerPlay());
}

function computerPlay() {
  let computerChoice;
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'paper';
  } else if (randomNumber === 3) {
    computerChoice = 'scissors';
  }

  return computerChoice.toLowerCase();
}

function playRound(playerSelection, computerChoice) {
  if (playerSelection === 'rock' && computerChoice === 'scissors') {
    scoreInfo.textContent = 'Computer throws scissors';
    scoreMsg.textContent = 'Your point';
    playerPoints = playerScore.innerHTML;
    playerPoints++;
    playerScore.innerHTML = playerPoints;
  } else if (playerSelection === 'paper' && computerChoice === 'rock') {
    scoreInfo.textContent = 'Computer throws rock';
    scoreMsg.textContent = 'Your point';
    playerPoints = playerScore.innerHTML;
    playerPoints++;
    playerScore.innerHTML = playerPoints;
  } else if (playerSelection === 'scissors' && computerChoice === 'paper') {
    scoreInfo.textContent = 'Computer throws paper';
    scoreMsg.textContent = 'Your point';
    playerPoints = playerScore.innerHTML;
    playerPoints++;
    playerScore.innerHTML = playerPoints;
  } else if (playerSelection === computerChoice) {
    scoreInfo.textContent = `Computer throws ${computerChoice}`;
    scoreMsg.textContent = 'Draw';
  } else {
    scoreInfo.textContent = `Computer throws ${computerChoice}`;
    scoreMsg.textContent = "Computer's point";
    computerPoints = computerScore.innerHTML;
    computerPoints++;
    computerScore.innerHTML = computerPoints;
  }

  while (playerPoints == 5 || computerPoints == 5) {
    announceWinner(computerChoice);
  }
}

function announceWinner(computerChoice) {
  if (playerPoints == 5) {
    scoreInfo.textContent = `Computer throws ${computerChoice}`;
    scoreMsg.textContent = `You win, ${playerPoints} to ${computerPoints}`;
  } else if (computerPoints == 5) {
    scoreMsg.textContent = `You lose, ${playerPoints} to ${computerPoints}`;
  }

  playerPoints = 0;
  playerScore.innerHTML = playerPoints;

  computerPoints = 0;
  computerScore.innerHTML = computerPoints;
}
