
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const rpsButtons = document.querySelectorAll('.rps');
const playerSpan = document.querySelector('#playerSpan');
const computerSpan = document.querySelector('#computerSpan');
const winner = document.querySelector('#winner');
const playingTo = document.querySelector('#playto');
const resetButton = document.querySelector('#RESET');
const rpsOver = document.querySelector('#rpsOver');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let gameOver = 3;
let playerChoice = 0;
let computerChoice = 0;
let gameLogic = {
    rock : 0,
    paper: 0,
    scissors: 0,
    playerCounter: 0,
    computerCounter: 0,
};


let computerPlay = function () {
let rng = Math.floor(Math.random() * 3) + 1;
    if (rng == 1){   //rock
        computerChoice = gameLogic.rock;
        computerSpan.innerHTML = ("ROCK!")
    }
    if (rng == 2){   //paper
        computerChoice = gameLogic.paper;
        computerSpan.innerHTML = ("PAPER!")
    }
    if (rng == 3){   //scissors
        computerChoice = gameLogic.scissors;
        computerSpan.innerHTML = ("scissors!")
    }
};



rockButton.onclick = function() {
    gameLogic.rock = 2;
    gameLogic.paper = 3;
    gameLogic.scissors = 1;
    playerChoice = gameLogic.rock;
    playerSpan.innerHTML = ("ROCK!");
    computerPlay()
};
paperButton.onclick = function() {
    gameLogic.rock = 1;
    gameLogic.paper = 2;
    gameLogic.scissors = 3;
    playerChoice = gameLogic.paper;
    playerSpan.innerHTML = ("PAPER!");
    computerPlay()
};
scissorsButton.onclick = function() {
    gameLogic.rock = 3;
    gameLogic.paper = 1;
    gameLogic.scissors = 2;
    playerChoice = gameLogic.scissors;
    playerSpan.innerHTML = ("SCISSORS!");
    computerPlay()
};
resetButton.onclick = function() {
    gameLogic.playerCounter = 0;
    gameLogic.computerCounter = 0;
    playerScore.innerHTML = 0;
    computerScore.innerHTML =0;
    rpsOver.innerHTML = ("GAME IN PROGRESS")
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

}

playingTo.addEventListener('change', function(){
    gameOver = parseInt(this.value);
})
//game evaluation
for (let i = 0; i < rpsButtons.length; i++) {
    rpsButtons[i].addEventListener("click", function(){
        
        if(playerChoice > computerChoice){
            winner.innerHTML = ("Player wins!")
            gameLogic.playerCounter++;
            playerScore.innerHTML = gameLogic.playerCounter;
        } else if (playerChoice < computerChoice){
            winner.innerHTML = ("Computer wins!")
            gameLogic.computerCounter++;
            computerScore.innerHTML = gameLogic.computerCounter;
        } else {
            winner.innerHTML = ("Tie match, try again!")
        }
        playerChoice = 0;
        computerChoice = 0;
        if(gameLogic.playerCounter == gameOver || gameLogic.computerCounter == gameOver){
            rpsOver.innerHTML = ("GAME OVER");
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
        });
};





