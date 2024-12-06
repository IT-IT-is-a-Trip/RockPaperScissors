let humanScore = 0;
let ComputerScore = 0;
let rounds = 0;
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


// function getHumanChoice() {
    //     let enterChoice = prompt('Rock, Paper, Scissors?', "").toLowerCase();
    //     console.log("Your choice: " + enterChoice);
    //     return enterChoice;
    // } WILL BE REMOVE
    let wonRound = "You victory!";
    let loseRound = "Computer victory!";
    let tieRound = 'Tie, try again';
    const rockb = document.querySelector('#rock');
    const paperb = document.querySelector('#paper');
    const scissorsb = document.querySelector('#scissors');
    const restartb = document.querySelector('#restart');
    restartb.addEventListener('click', () => {
        rounds = 0;
        humanScore = 0;
        ComputerScore = 0;
    })
    
    rockb.addEventListener("click", () => {
        playRound('rock');
        if (rounds == 4) {
        playGame()
        }
        else {rounds++};
    });
    paperb.addEventListener("click", () => {
        playRound('paper');
        if (rounds == 4) {
        playGame()
        }
        else {rounds++};
    });
    scissorsb.addEventListener("click", () => {
        playRound('scissors');
        if (rounds == 4) {
        playGame()
        }
        else {rounds++};
    });

function playRound(humanSelection) {
    const computerSelection = getComputerChoice()
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

function playGame() {
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
