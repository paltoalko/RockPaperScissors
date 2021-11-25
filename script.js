const startScreen = document.querySelector(".startscreen");
const gameScreen = document.querySelector(".gamescreen");

document.getElementById("start").addEventListener("click", function() {
    startScreen.style.display = "none"
    gameScreen.style.display = "flex" 
})

const roundResultScreen = document.querySelector(".roundresultscreen")

document.querySelectorAll(".btn").forEach(el => el.addEventListener('click', function (e) {
    gameScreen.style.display = "none";
    roundResultScreen.style.display = "flex";
}))


//----------//
// var for game to work
const gameOptions = document.querySelectorAll(".btn")
const playerScores = document.querySelector(".playerscore")
const roundPlayerScores = document.querySelector(".roundplayerscore")
const roundComputerScores = document.querySelector(".roundcomputerscore")
const computerScores = document.querySelector(".computerscore")
const rounds = document.querySelector(".round")
const roundsround = document.querySelector(".roundround")
const roundtxt = document.querySelector(".resulttxt")
const computerImg = document.querySelector(".computerchoice")


let playerScore = 0;
let computerScore = 0;
let round = 1;

function changeScores () {
    playerScores.innerHTML = `${playerScore}`
    computerScores.innerHTML = `${computerScore}`
    roundPlayerScores.innerHTML = `${playerScore}`
    roundComputerScores.innerHTML = `${computerScore}`
}

function changeRound () {
    round += 1;
    rounds.innerHTML = `ROUND ${round}`;
    roundsround.innerHTML = `ROUND ${round}`;
}

const changeScreen = function () {
    gameScreen.style.display = "flex";
    roundResultScreen.style.display = "none";
    changeRound ();
}
document.querySelector(".roundresultscreen").addEventListener("click", changeScreen , true)

function computerPlay() {
    let gameOptions = ['scissors', 'rock', 'paper'];
    let computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    if (computerChoice === "rock") {
        document.querySelector(".computerchoice .rock").style.display = "flex";
        document.querySelector(".computerchoice .paper").style.display = "none";
        document.querySelector(".computerchoice .scissors").style.display = "none";
    } else if (computerChoice === "paper") {
        document.querySelector(".computerchoice .paper").style.display = "flex";
        document.querySelector(".computerchoice .rock").style.display = "none";
        document.querySelector(".computerchoice .scissors").style.display = "none";
    } else if (computerChoice === "scissors") {
        document.querySelector(".computerchoice .scissors").style.display = "flex";
        document.querySelector(".computerchoice .paper").style.display = "none";
        document.querySelector(".computerchoice .rock").style.display = "none";
    }
    return computerChoice
};


function playRound (playerChoice,computerChoice) {
    
    switch (true) {
        case (playerChoice === computerChoice):
          roundtxt.innerHTML = "DRAW";
          break;
        case (playerChoice === 'rock' && computerChoice === 'scissors'):
        case (playerChoice === 'paper' && computerChoice === 'rock'):
        case (playerChoice === 'scissors' && computerChoice === 'paper'):
            roundtxt.innerHTML = "YOU WIN";
         playerScore += 1;
         break;
        default:
            roundtxt.innerHTML = "YOU LOSE";
          computerScore += 1;
          break;
      }
      changeScores ();
    

    return [playerScore,computerScore]
};


function endGame (playerScore,computerScore) {
    if (computerScore == 5) {
        roundsround.innerHTML = `END OF GAME`;
        roundtxt.innerHTML = "YOU LOST";
        document.querySelector(".roundresultscreen").removeEventListener("click", changeScreen , true)
        document.querySelector("#nextround").innerHTML = "CLICK HERE TO RESTART GAME"
        document.querySelector("#nextround").addEventListener("click", function () {
            window.location.reload();
        })
        

    } else if (playerScore == 5) {
        roundsround.innerHTML = `END OF GAME`;
        roundtxt.innerHTML = "YOU WON";
        document.querySelector(".roundresultscreen").removeEventListener("click", changeScreen , true)
        document.querySelector("#nextround").innerHTML = "CLICK HERE TO RESTART GAME"
        document.querySelector("#nextround").addEventListener("click", function () {
            window.location.reload();
        })
    }

}

function playGame() {
    let playerChoice;
    gameOptions.forEach((option) => {
        option.addEventListener('click', () => {
            
            if (option.classList.contains('btn-rock')) {
                playerChoice = 'rock';
                document.querySelector(".playerchoice .rock").style.display = "flex";
                document.querySelector(".playerchoice .paper").style.display = "none";
                document.querySelector(".playerchoice .scissors").style.display = "none";
                
            } else if (option.classList.contains('btn-paper')) {
                playerChoice = 'paper';
                document.querySelector(".playerchoice .paper").style.display = "flex";
                document.querySelector(".playerchoice .scissors").style.display = "none";
                document.querySelector(".playerchoice .rock").style.display = "none";
        } else {
            playerChoice = 'scissors';
            document.querySelector(".playerchoice .scissors").style.display = "flex";
            document.querySelector(".playerchoice .paper").style.display = "none";
            document.querySelector(".playerchoice .rock").style.display = "none";
        }
        playRound (playerChoice, computerPlay());
        endGame (playerScore,computerScore)
    });
});
};

playGame ();









    








   
    
    






















