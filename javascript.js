let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const i = Math.floor(Math.random() * choices.length);
    return choices[i];
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("Equality ! Try again !");
    } else if ((playerSelection === choices[0] && computerSelection === choices[1]) || 
    (playerSelection === choices[1] && computerSelection === choices[2]) ||
    (playerSelection === choices[2] && computerSelection === choices[0])) {
        computerScore ++;
        console.log("Computer Choose " + computerSelection + " ! Try again to beat it !");
    } else {
        playerScore++;
        console.log("Nice one ! " + playerSelection + " beats " + computerSelection + " !");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your choice young man ?");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if (computerScore > playerScore) {
        console.log("Computer are going to overtake humanity...");
    } else {
        console.log("You just beat a computer, don't be too proud of yourself young man.");
    }
}



