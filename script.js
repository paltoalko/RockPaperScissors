//Starts game
const hideStartScreen = document.querySelector(".startscreen");
const displayGameScreen = document.querySelector(".gamescreen");

document.getElementById("start").addEventListener("click", function() {
    hideStartScreen.style.display = "none"
    displayGameScreen.style.display = "flex"
    
})

// Player Choice

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", function () {
    console.log("rock");   
})
paper.addEventListener("click", function () {
    console.log("paper");   
})
scissors.addEventListener("click", function () {
    console.log("scissors");   
})

