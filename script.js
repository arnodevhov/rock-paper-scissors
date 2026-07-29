function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function getHumanChoice() {
  let choice = prompt('Enter rock, paper or scissors');

  return choice;
}

let humanScore = 0;
let computerScore = 0;
let rounds = 5;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    alert(`You won: ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === computerChoice) {
    alert("It's a tie!");
  } else {
    computerScore++;
    alert(`Computer won: ${computerChoice} beats ${humanChoice}`);
  }
}

while (rounds > 0) {
  const humanSelection = getHumanChoice().toLowerCase();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  rounds--;
}

function checkWinner() {
  alert('Game over');

  if (humanScore > computerScore) {
    alert(`Human wins: ${humanScore}:${computerScore}`);
  } else if (humanScore < computerScore) {
    alert(`Computer wins: ${humanScore}:${computerScore}`);
  } else {
    alert(`It's a tie: ${humanScore}:${computerScore}`);
  }
}

checkWinner();
