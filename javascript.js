// Function section
let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let numberOfGames = 0;

function getComputerChoice() {
    const i = Math.floor(Math.random() * choices.length);
    return choices[i];
}

function playRound(playerSelection, computerSelection) {
    if (playerScore == 5 || computerScore == 5) {
        endGame();
        return;
    }

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        result.textContent = "Equality ! Try again !";
        results.appendChild(result);
        numberOfGames++;
    } else if ((playerSelection === choices[0] && computerSelection === choices[1]) || 
    (playerSelection === choices[1] && computerSelection === choices[2]) ||
    (playerSelection === choices[2] && computerSelection === choices[0])) {
        computerScore ++;
        score1.textContent = 'Computer: ' + computerScore;
        computerScoreDisplay.appendChild(score1);
        result.textContent = "Computer Choose " + computerSelection + " ! Try again to beat it !";
        results.appendChild(result);
        numberOfGames++;
    } else {
        playerScore++;
        score2.textContent = 'You..: ' + playerScore;
        playerScoreDisplay.appendChild(score2);
        result.textContent = "Nice one ! " + playerSelection + " beats " + computerSelection + " !";
        results.appendChild(result);
        numberOfGames++;
    }

    if (playerScore == 5 || computerScore == 5) {
        endGame();
    }
}

function endGame() {
    if (computerScore > playerScore) {
        result.textContent = "Computer are going to overtake humanity...";
        results.appendChild(result);
    } else {
        result.textContent = "You just beat a computer, don't be too proud of yourself young man.";
        results.appendChild(result);
    }
}

// TRANSITION

// UI section
const container = document.querySelector('#container');
const scores = document.querySelector('#scores');
const results = document.querySelector('#results');
const computerScoreDisplay = document.querySelector('#computerScore');
const playerScoreDisplay = document.querySelector('#playerScore');

const result = document.createElement('p');
const score1 = document.createElement('p');
const score2 = document.createElement('p');

score1.textContent = 'Computer: ' + computerScore;
computerScoreDisplay.appendChild(score1);

score2.textContent = 'You..: ' + playerScore;
playerScoreDisplay.appendChild(score2);

// ROCK
const rockButton = document.createElement("button");
rockButton.classList.add('rockBtn');
rockButton.classList.add('btn');
rockButton.innerText = 'ROCK';
rockButton.style.cssText = 'padding: 50px';
container.appendChild(rockButton);

// PAPER
const paperButton = document.createElement('button');
paperButton.classList.add('paperBtn');
paperButton.classList.add('btn');
paperButton.innerText = 'PAPER';
paperButton.style.cssText = 'padding: 50px';
container.appendChild(paperButton);

// SCISSORS
const scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissorsBtn');
scissorsButton.classList.add('btn');
scissorsButton.innerText = 'SCISSORS';
scissorsButton.style.cssText = 'padding: 50px';
container.appendChild(scissorsButton);

// Event listeners


const rockBtn  = document.querySelector('.rockBtn');
rockBtn.addEventListener('click', () => {
    rockBtn.classList.add('clicked');
    playRound("rock", getComputerChoice());
    setTimeout(function(){
        rockBtn.classList.remove('clicked');
    }, 350);
});

const paperBtn  = document.querySelector('.paperBtn');
paperBtn.addEventListener('click', () => {
    paperBtn.classList.add('clicked');
    playRound("paper", getComputerChoice());
    setTimeout(function(){
        paperBtn.classList.remove('clicked');
    }, 350);
});

const scissorsBtn  = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    scissorsBtn.classList.add('clicked');
    playRound("scissors", getComputerChoice());
    setTimeout(function(){
        scissorsBtn.classList.remove('clicked');
    }, 350);
});



game();