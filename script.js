function computerPlay() {
    let gameOptions = ['Scissors', 'Rock', 'Paper'];
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}
const computerSelection = computerPlay()
// console.log(computerSelection) // finaly returns a rock,paper or scissors

function playerPlay() {
    console.log("Let's play a Rock Paper Scissors! Type rock, scissors or paper.");
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
// console.log(playerSelection)


// function that plays the game of rock paper and scissors

function playRound(playerSelection,computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase() && computerSelection.toLowerCase() != "scissors" && playerSelection.toLowerCase() != "scissors") {
        console.log("It's a draw!");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
        console.log("Rock beats scissors! You lose :(");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
        console.log("Rock beats scissors! You win");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
        console.log("Scissors beats paper! You lose :(");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
        console.log("Scissors beats paper! You win");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
        console.log("Paper beats rock! You lose :(");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
        console.log("Paper beats rock! You win");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "scissors") {
         console.log("It's scissoring time!");
         return("Your choice to scissor with Computer was not wise. Maybe try with a person ;))" )
     } else {
        console.log("I'm not sure what, but something went worng :(");
     }
}

console.log(playRound(playerSelection,computerSelection))

// function that plays 5 rounds of RPS

// plays once and notes the score 