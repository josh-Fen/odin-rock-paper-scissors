let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let compChoice = null;
    switch (num) {
        case 0:
            compChoice = "rock";
            break;
        case 1:
            compChoice = "paper";
            break;
        case 2:
            compChoice = "scissors";
            break
    }
    return compChoice;
}

function getHumanChoice() {
    let humChoice = prompt('Please choose rock, paper, or scissors', 'rock, paper, or scissors');
    humChoice = humChoice.toLowerCase();
    while (humChoice !== 'rock' && humChoice !== 'paper' && humChoice !== 'scissors') {
        humChoice = prompt('Please choose rock, paper, or scissors', 'rock, paper, or scissors');
        humChoice = humChoice.toLowerCase();
    }
    return humChoice;
}

function playRound(humChoice, compChoice) {
    winner = null;
    if (humChoice === 'rock') {
        switch (compChoice) {
            case 'rock':
                winner = 'tie';
                break;
            case 'paper':
                winner = 'computer';
                break;
            case 'scissors':
                winner = "human";
                break;
        }
    } else if (humChoice === 'paper') {
        switch (compChoice) {
            case 'rock':
                winner = 'human';
                break;
            case 'paper':
                winner = 'tie';
                break;
            case 'scissors':
                winner = "computer";
                break;
        }
    } else {
        switch (compChoice) {
            case 'rock':
                winner = 'computer';
                break;
            case 'paper':
                winner = 'human';
                break;
            case 'scissors':
                winner = "tie";
                break;
        }
    }

    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    //console.log(`Winner is ${winner}, human chose ${humChoice}, computer chose ${compChoice}\nScores are human: ${humanScore} to computer: ${computerScore}`);
}

function declareWinner() {
    if (humanScore > computerScore) {
        console.log(`Human won with a score of ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer won with a score of ${computerScore} to ${humanScore}`);
    } else {
        console.log(`It was a tie with a score of ${humanScore} to ${computerScore}`);
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    declareWinner();
}

playGame();
