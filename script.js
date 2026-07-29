function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'Unknown action';
  }
}

function getHumanChoice() {
  let choice = prompt('Enter rock, paper or scissors');

  return choice;
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    alert(
      `Score: ${humanScore} : ${computerScore} | You won: ${humanChoice} beats ${computerChoice}`
    );
  } else if (humanChoice === computerChoice) {
    alert("It's a tie!");
  } else {
    computerScore++;
    alert(
      `Score: ${humanScore} : ${computerScore} | Computer won: ${computerChoice} beats ${humanChoice}`
    );
  }
}

playRound(humanSelection, computerSelection);
