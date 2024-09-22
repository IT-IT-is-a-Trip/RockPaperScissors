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


function getHumanChoice() {
    let enterChoice = prompt('Rock, Paper, Scissors?', "").toLowerCase();
    console.log("Your choice: " + enterChoice);
    return enterChoice;
}

let wonRound = "You victory!";
let loseRound = "Computer victory!";
let tieRound = 'Tie, try again';

function playGame() {
    let humanScore = 0;
    let ComputerScore = 0;
    function playRound() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if (humanSelection == "rock" && computerSelection == "scissors" ||
            humanSelection == 'paper' && computerSelection == 'rock' ||
            humanSelection == 'scissors' && computerSelection == 'paper') {
                console.log(wonRound);
                humanScore++
            }
            else if (humanSelection == "rock" && computerSelection == "rock" ||
                humanSelection == "paper" && computerSelection == "paper" ||
                humanSelection == "scissors" && computerSelection == "scissors") {
                    console.log(tieRound);
                }
                else {
                    console.log(loseRound);
                    ComputerScore++
                }
                console.log("Your score" + ": " + humanScore);
                console.log("Computer score" + ": " + ComputerScore);
                console.log("");
    }
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > ComputerScore) {
        console.log("You win with: " + humanScore + " Score");
        console.log("Computer score: " + ComputerScore);
    }
    else if (ComputerScore > humanScore) {
        console.log("Oh shit, you are loser! Your score: " + humanScore);
        console.log("Computer score: " + ComputerScore);
    }
    else {
        console.log("It`s tie) No one won!(")
        console.log("Your final score: " + humanScore);
        console.log("Computer score: " + ComputerScore);
    }
}
