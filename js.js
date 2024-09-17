function getComputerChoice(randomChoice) {
    let rand = Math.random(randomChoice);
    let randResult;
    if (rand >= 0 && rand <= 0.33333333333) {
        randResult = "rock";
    }
    else if (rand > 0.33333333333 && rand <= 0.66666666666) {
        randResult = "paper";
    }
    else {
        randResult = "scissors"
    }
    console.log("Computer choice:" + randResult);
    return randResult;
}


function getHumanChoice(choice) {
    let humanRequest = prompt('Rock, Paper, Scissors?', "").toLowerCase();
    return humanRequest;
}

let humanScore = 0;
let ComputerScore = 0;
let wonRound = "You victory!";
let loseRound = "Computer victory!";
let tieRound = 'Tie, try again';

function playRound(humanChoice, computerChoice) {
    if (humanSelection == "rock" && computerSelection == "scissors" ||
    humanSelection == 'paper' && computerSelection == 'rock' ||
    humanSelection == 'scissors' && computerSelection == 'paper') {
        console.log(wonRound);
        humanScore++;
    }
    else if (humanSelection == "rock" && computerSelection == "rock" ||
    humanSelection == "paper" && computerSelection == "paper" ||
    humanSelection == "scissors" && computerSelection == "scissors") {
                console.log(tieRound);
                /**повторный вызов функции игры раунда */
            }
    else {
        console.log(loseRound);
        ComputerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);