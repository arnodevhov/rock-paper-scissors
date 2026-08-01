// DOM Elements
const gameResult = document.getElementById('result');
const startGameBtn = document.getElementById('start-game');
const gameContainer = document.querySelector('.game');
let gameButtons, messageEl, resetGameBtn, humanScoreEl, computerScoreEl;
let isPlaying = false;

// States
let humanScore = 0;
let computerScore = 0;
let rounds = 5;

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

function checkWinner() {
  if (humanScore >= rounds || computerScore >= rounds) {
    isPlaying = false;
    gameResult.textContent = `Game over! ${humanScore >= rounds ? 'You won the game!' : 'You lost the game!'} `;
  }
}

function playRound(humanChoice, computerChoice) {
  if (isPlaying) {
    if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      messageEl.textContent = `You won: ${humanChoice} beats ${computerChoice}`;
      humanScoreEl.textContent = `Human ${humanScore}`;
    } else if (humanChoice === computerChoice) {
      messageEl.textContent = "It's a tie!";
    } else {
      computerScore++;
      messageEl.textContent = `Computer won: ${computerChoice} beats ${humanChoice}`;
      computerScoreEl.textContent = `Computer ${computerScore}`;
    }
  }

  checkWinner();
}

function gameInit() {
  isPlaying = true;

  startGameBtn.remove();
  gameContainer.style.display = 'flex';
  messageEl = document.getElementById('message');
  resetGameBtn = document.getElementById('new-game');
  humanScoreEl = document.getElementById('human-score');
  computerScoreEl = document.getElementById('computer-score');
  gameButtons = document.querySelectorAll('.game-buttons button');

  gameButtons.forEach((gameBtn) => {
    gameBtn.addEventListener('click', (e) => {
      const humanChoice = gameBtn.textContent.toLowerCase();
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    });
  });

  resetGameBtn.addEventListener('click', resetGame);
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  isPlaying = true;
  gameResult.textContent = '';
  messageEl.textContent = '';
  humanScoreEl.textContent = 'Human 0';
  computerScoreEl.textContent = 'Computer 0';
}

startGameBtn.addEventListener('click', gameInit);
