function computerPlay() {
    let gameOptions = ['Scissors', 'Rock', 'Paper'];
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}
const computerSelection = computerPlay()
// console.log(computerSelection) // finaly returns a rock,paper or scissors

function playerPlay() {
    
    let playerChoice = prompt("Let's play a Rock Paper Scissors! Type rock, scissors or paper.")
    if (playerChoice.toLowerCase() === "rock") {
        playerChoice = "Rock";
    } else if (playerChoice.toLowerCase() === "scissors") {
        playerChoice = "Scissors";
    } else if (playerChoice.toLowerCase() === "paper") {
        playerChoice = "Paper";
    } else if (playerChoice.toLowerCase() !== "rock" || "scissors" || "paper") {
        alert("Please try to put your value again");
        location.reload();// so you can reload once again
    }
    else {
        console.log("Not sure what hapenned.");
    }  
    return playerChoice;
}

const playerSelection = playerPlay()
// user scores and computer score
let userScore = 0;
let computerScore = 0;

// function that plays the game of rock paper and scissors

function playRound(playerSelection,computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase() && computerSelection.toLowerCase() != "scissors" && playerSelection.toLowerCase() != "scissors") {
        console.log("It's a draw!");
        userScore = userScore + 1;
        computerScore = computerScore + 1;
        return("Your Choice: " + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
        console.log("Rock beats scissors! You lose :(");
        computerScore = computerScore + 1;
        return("Your Choice: " + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
        console.log("Rock beats scissors! You win");
        userScore = userScore + 1;
        return("Your Choice: " + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
        console.log("Scissors beats paper! You lose :(");
        computerScore = computerScore + 1;
        return("Your Choice: " + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
        console.log("Scissors beats paper! You win");
        userScore = userScore + 1; 
        return("Your Choice: " + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
        console.log("Paper beats rock! You lose :(");
        computerScore = computerScore + 1;
        return("Your Choice: " + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
        console.log("Paper beats rock! You win");
        userScore = userScore + 1;
        return("Your Choice: " + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "scissors") {
         console.log("It's scissoring time!");
         userScore = userScore + 1;
         computerScore = computerScore + 1;
         return("Your choice to scissor with Computer was not wise. Maybe try with a person ;))" )
     } else {
        console.log("I'm not sure what, but something went wrong :(");
     }
}



// function that plays 5 rounds of RPS
for(var i=0;i<5;i++){
    console.log("Round ", i + 1);
    let playerSelection = prompt("Let's play a Rock Paper Scissors! Type rock, scissors or paper.");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("Your score = " + userScore);
    console.log("Computer's score = " + computerScore);
  }

// function that displays winner at the end

function results(userScore,computerScore) {
    if (computerScore > userScore) {
        console.log("You lost :( " + "Your score: " + userScore + ". Computer's score: " + computerScore + ".")
    } else if (computerScore == userScore) {
        console.log("It's a tie! " + "Your score: " + userScore + ". Computer's score: " + computerScore + ".")
    } else if (computerScore < userScore) {
        console.log("Congrats! You won! " + "Your score: " + userScore + ". Computer's score: " + computerScore + ".")
    }
    
}
console.log(results(userScore,computerScore));


