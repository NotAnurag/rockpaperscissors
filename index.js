


let computerSelect = computerPlay();
let playerSelect = "none";
let computerScore = 0;
let playerScore = 0;
        
        function computerPlay() {
            let computerSelect = getRandomInt(3);
                if (computerSelect === 0) {
                    return "rock";
                } else if (computerSelect === 1) {
                    return "paper";
                } else if (computerSelect === 2) {
                    return "scissors";
                }
            }

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        
        function playRound(playerSelect, computerSelect) {
            if (playerSelect == computerSelect) {
                return [`Draw, both sides selected ${computerSelect}!`,`Computer: ${computerScore} points`, `Player: ${playerScore} points`];
            } else if (playerSelect == "rock" && computerSelect === "paper") {
                computerScore++;
                return [`You lose, paper beats rock`, `Computer: ${computerScore} points`, `Player: ${playerScore} points`];
            } else if (playerSelect == "rock" && computerSelect === "scissors") {
                playerScore++;
                return ["You win, rock beats scissors!", `Computer: ${computerScore} points`, `Player: ${playerScore} points`];
            } else if (playerSelect == "paper" && computerSelect === "rock") {
                playerScore++;
                return ["You win, paper beats rock!", `Computer: ${computerScore} points`, `Player: ${playerScore} points`];
            } else if (playerSelect == "paper" && computerSelect === "scissors") {
                computerScore++;
                return ["You lose, scissors beats paper", `Computer: ${computerScore} points`, `Player: ${playerScore} points`];
            } else if (playerSelect == "scissors" && computerSelect === "rock") {
                computerScore++
                return ["You lose, rock beats scissors", `Computer: ${computerScore} points`, `Player: ${playerScore} points`];;
            }  else if (playerSelect == "scissors" && computerSelect === "paper") {
                playerScore++;
                return ["You win, scissors beats paper!", `Computer: ${computerScore} points`, `Player: ${playerScore} points`];;
            }
        }
        
        function winnerDecider() {
            if (playerScore > computerScore) {
                return "YOU WIN";
            } else if (computerScore > playerScore) {
                return "YOU LOSE";
            } else if (playerScore = computerScore) {
                return "DRAW";
            }
        }

const rock = document.querySelector('#rock');

rock.addEventListener('click', choseRock);

function choseRock() {
    playerSelect = 'rock';
    computerSelect = computerPlay();
    console.log(`Computer selected ${computerSelect}`);
    console.log(`You selected ${playerSelect}`);
    console.log(playRound(playerSelect, computerSelect));
}

const paper = document.querySelector('#paper');

paper.addEventListener('click', chosePaper);

function chosePaper() {
    playerSelect = 'paper';
    computerSelect = computerPlay();
    console.log(`Computer selected ${computerSelect}`);
    console.log(`You selected ${playerSelect}`);
    console.log(playRound(playerSelect, computerSelect));
}

const scissors = document.querySelector('#scissors');

scissors.addEventListener('click', choseScissors);

function choseScissors() {
    playerSelect = 'scissors';
    computerSelect = computerPlay();
    console.log(`Computer selected ${computerSelect}`);
    console.log(`You selected ${playerSelect}`);
    console.log(playRound(playerSelect, computerSelect));
}


