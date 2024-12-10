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

    const locWinMessage = () => {document.getElementById('message').innerText = 'You win round!'};
    const locLoseMessage = () => {document.getElementById('message').innerText = 'You lose round(';}
    const locTieMessage = () => {document.getElementById('message').innerText = 'Tie round';}

    const finalWinMessage = () => {document.getElementById('message').innerText = 'VICTORY';}
    const finalLoseMessage = () => {document.getElementById('message').innerText = 'DEFEAT';}
    const finalTieMessage = () => {document.getElementById('message').innerText = 'TIE, TRY AGAIN'};

    const rockb = document.querySelector('#rock');
    const paperb = document.querySelector('#paper');
    const scissorsb = document.querySelector('#scissors');
    const restartb = document.querySelector('#restart');

    restartb.addEventListener('click', () => {
        rounds = 0;
        humanScore = 0;
        ComputerScore = 0;
        document.getElementById('rock').hidden = false
        document.getElementById('paper').hidden = false
        document.getElementById('scissors').hidden = false;
        document.getElementById('round').innerText = 'Rounds: ' + rounds;
        document.getElementById('Current computer score').innerText = "Computer score: " + ComputerScore; 
        document.getElementById('Current human score').innerText = "Your score: " + humanScore;
        document.getElementById('message').innerText = 'Make your choice to start the game';
    });
    
    rockb.addEventListener("click", () => {
        playRound('rock');
        if (rounds == 4) {
        playGame()
        }
        else {rounds++};
        scores();
    });
    paperb.addEventListener("click", () => {
        playRound('paper');
        if (rounds == 4) {
        playGame()
        }
        else {rounds++};
        scores();
    });
    scissorsb.addEventListener("click", () => {
        playRound('scissors');
        if (rounds == 4) {
        playGame()
        }
        else {rounds++};
        scores();
    });

    function scores() {
        document.getElementById('Current computer score').innerText = "Computer score: " + ComputerScore; 
        document.getElementById('Current human score').innerText = "Your score: " + humanScore;
        document.getElementById('round').innerText = 'Rounds: ' + rounds;
        if (rounds == 4) {

        }
    }

    function playRound(humanSelection) {
    const computerSelection = getComputerChoice()
    if (humanSelection == "rock" && computerSelection == "scissors" ||
        humanSelection == 'paper' && computerSelection == 'rock' ||
        humanSelection == 'scissors' && computerSelection == 'paper') {
            console.log(wonRound);
            locWinMessage();
            humanScore++
        }
        else if (humanSelection == "rock" && computerSelection == "rock" ||
            humanSelection == "paper" && computerSelection == "paper" ||
            humanSelection == "scissors" && computerSelection == "scissors") {
                console.log(tieRound);
                locTieMessage();
            }
            else {
                console.log(loseRound);
                locLoseMessage();
                ComputerScore++
            }
            console.log("Your score" + ": " + humanScore);
            console.log("Computer score" + ": " + ComputerScore);
            console.log("");
}

function playGame() {
    if (humanScore > ComputerScore) {
        finalWinMessage();
        console.log("You win with: " + humanScore + " Score");
        console.log("Computer score: " + ComputerScore);
    }
    else if (ComputerScore > humanScore) {
        finalLoseMessage();
        console.log("Oh shit, you are loser! Your score: " + humanScore);
        console.log("Computer score: " + ComputerScore);
    }
    else {
        inalTieMessage();
        console.log("It`s tie) No one won!(")
        console.log("Your final score: " + humanScore);
        console.log("Computer score: " + ComputerScore);
    }
    rounds++
    document.getElementById('rock').hidden = true;
    document.getElementById('paper').hidden = true;
    document.getElementById('scissors').hidden = true;
}
