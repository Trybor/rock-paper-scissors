// Text animation
let i = 0;
let txt = 'Wanna play a game?';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("gameh1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

//Function to play audo on click
function playSound() {
    const buttonPress = document.querySelector("#startbuttonsound");
    buttonPress.play();
}
mainButton = document.querySelector("#startbutton").addEventListener("click", playSound);


// Function to play winner audio
function playWinSound() {
    const winSound = document.getElementById("winnersound");
    winSound.play();
}

// Function to play loser audio
function playLoseSound() {
    const loseSound = document.getElementById("losersound");
    loseSound.play();
}

// Function to hide start div and show end div
let startContainer = document.getElementById('startcontainer');
let btn = document.querySelector("#startbutton");
btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    // Add timeout
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700); 
    setTimeout(() => {  typeWriter(); }, 1000);
    // Add event listener to all of the game buttons
    gameButtons = document.querySelectorAll(".gameselection").forEach(item => {
        item.addEventListener("click", playSound);
    })
});


// Function to hide end div and show winner div & logos
function hideEndContainerShowWinner() {
    let gameContainer = document.querySelector('.gamecontainer');
    let bottomContainer = document.getElementById('bottomcontainer');
    gameContainer.style.opacity = 0;
    gameContainer.style.transform = 'scale(0)';
    // Add timeout
    gameContainer.style.display = 'none';
    bottomContainer.style.display = 'block';
}

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    // Add timeout
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700); 
    setTimeout(() => {  typeWriter(); }, 1000);
    // Add event listener to all of the game buttons
    gameButtons = document.querySelectorAll(".gameselection").forEach(item => {
        item.addEventListener("click", playSound);
    })
});


// Global variables
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;


// Event listener for click
document.addEventListener("click", gameSelectionListener);
function gameSelectionListener(event) {
    let element = event.target;
    console.log(event.target);
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    if (element.classList.contains("gameselection") && element.id === ("rockdiv")) {
        playRound(rock);
        console.log("submitted rock")
    }
    else if (element.classList.contains("selection") && element.id === ("rockimg")) {
        playRound(rock);
        console.log("submitted rock")
    }
    else if (element.classList.contains("gameselectiontext") && element.id === ("rockselection")) {
        playRound(rock);
        console.log("submitted rock")
    }
    else if (element.classList.contains("gameselection") && element.id === ("paperdiv")) {
        playRound(paper);
        console.log("submitted paper")
    }
    else if (element.classList.contains("selection") && element.id === ("paperimg")) {
        playRound(paper);
        console.log("submitted paper")
    }
    else if (element.classList.contains("gameselectiontext") && element.id === ("paperselection")) {
        playRound(paper);
        console.log("submitted paper")
    }
    else if (element.classList.contains("gameselection") && element.id === ("scissorsdiv")) {
        playRound(scissors);
        console.log("submitted scissors")
    }
    else if (element.classList.contains("selection") && element.id === ("scissorsimg")) {
        playRound(scissors);
        console.log("submitted scissors")
    }
    else if (element.classList.contains("gameselectiontext") && element.id === ("scissorsselection")) {
        playRound(scissors);
        console.log("submitted scissors")
    }
}


// Function to randomly generate computer game entries
function computerPlay() {
    randomGameValue = Math.floor(Math.random() * 3);
    if (randomGameValue == "0") {
        return "rock";
    }
    else if (randomGameValue == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Main game logic
function playRound(playerSelection) {
    console.log(playerSelection);
    // Generate computer selection
    const computerSelection = computerPlay();

    const rockSelected = document.querySelector("#rockdiv");
    const paperSelected = document.querySelector("#paperdiv");
    const scissorsSelected = document.querySelector("#scissorsdiv");
    const computerRockSelected = document.querySelector("#computerrockdiv");
    const computerPaperSelected = document.querySelector("#computerpaperdiv");
    const computerScissorsSelected = document.querySelector("#computerscissorsdiv");
    if (computerSelection == "rock") {
        computerRockSelected.style.backgroundColor = "#7987e9";
        computerPaperSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "white";
    }
    else if (computerSelection == "paper") {
        computerPaperSelected.style.backgroundColor = "#7987e9";
        computerRockSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "white";
    }
    else if (computerSelection == "scissors") {
        computerScissorsSelected.style.backgroundColor = "#7987e9";
        computerRockSelected.style.backgroundColor = "white";
        computerPaperSelected.style.backgroundColor = "white";
    }
    // Convert player entry to string
    let playerSelectionString = String(playerSelection);
    // Convert player selection to all lowercase
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    // If player selection is rock
    if (playerSelectionLowercase === "rock") {
        rockSelected.style.backgroundColor = "#fc5868";
        paperSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "white";
        // If computer selection is rock then draw
        if (computerSelection === "rock") {
            console.log("Draw");
            playerScore++;
            computerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
        // If computer selection is paper then lose
        else if (computerSelection === "paper") {
            console.log("You lose");
            computerScore++;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
        // If computer selection is scissors then win
        else {
            console.log ("You win");
            playerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
    }
    // Else if player selection is paper
    else if (playerSelectionLowercase === "paper") {
        paperSelected.style.backgroundColor = "#fc5868";
        rockSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "white";
        // If computer selection is rock then win
        if (computerSelection === "rock") {
            console.log("You win");
            playerScore++;
            // Set the score in HTML 
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
        // If computer selection is paper then draw
        else if (computerSelection === "paper") {
            console.log("Draw");
            playerScore++;
            computerScore++;
            // Set the score in the player HTML
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            // Set the score in the computer HTML
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
        // If computer selection is scissors then lose
        else {
            console.log("You lose")
            computerScore++;
            // Set the score in the computer HTML
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
    }
    // Else (player selected scissors)
    else if (playerSelectionLowercase === "scissors") {
        scissorsSelected.style.backgroundColor = "#fc5868";
        rockSelected.style.backgroundColor = "white";
        paperSelected.style.backgroundColor = "white";
        // If computer selection is rock then lose
        if (computerSelection === "rock") {
            console.log("You lose")
            computerScore++;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
        // If computer selection is paper then win
        else if (computerSelection === "paper") {
            console.log("You win");
            playerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
        // If computer selection is scissors then draw
        else {
            console.log("Draw");
            playerScore++;
            computerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
    }
    // invalid entries
    else {
        console.log("Invalid entry, please try again.");
        game(playerScore, computerScore);
        return null;
    }
}


// Score tracker
function game(playerScore, computerScore) {
    const gameUpdates = document.querySelector(".gameupdates");
    // Set variables for the user and computer
    let userWinLogo = document.getElementById('userwinslogo');
    let computerWinLogo = document.getElementById('computerwinslogo');
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            let text = document.createTextNode(`YOU WIN ${playerScore}:${computerScore}!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            playWinSound();
            userWinLogo.style.display = 'block';
        }
        else if (computerScore > playerScore) {
            let text = document.createTextNode(`COMPUTER WINS ${computerScore}:${playerScore}!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            playLoseSound();
            computerWinLogo.style.display = 'block';
        }
        else {
            let text = document.createTextNode(`IT WAS A DRAW!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            userWinLogo.style.display = 'block';
            computerWinLogo.style.display = 'block';
        }   
    }
}