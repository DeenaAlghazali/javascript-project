let score_player = 0;
let score_computer = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const player_hand = document.querySelector(".player-hand");
const computer_hand = document.querySelector(".computer-hand");
const play_again = document.querySelector(".play-again");

const rock = `./imgs/Rock.jpg`;
const paper = `./imgs/Paper.jpg`;
const scissors = `./imgs/Scissors.jpg`;
const whiteImg = `./imgs/white-bg.jpg`;

// random selection function
function computer() {
    const computerOptions = [rock, paper, scissors];
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    computer_hand.src = computerChoice;
    return computerChoice
}

// whoes winner and update the score
function compareChoice(player_hand, computerOption) {
    if (player_hand === rock) {
        if (computerOption === rock) {
            document.getElementById("winner").textContent = ("try again");
        } else if (computerOption === paper) {
            score_computer++;
            document.getElementById("score_computer").textContent = `${score_computer}`;
            document.getElementById("winner").textContent = ("the computer is winner");
        } else if (computerOption === scissors) {
            score_player++;
            document.getElementById("winner").textContent = ("the player is winner");
            document.getElementById("score_player").textContent = `${score_player}`;
        }
    }
    else if (player_hand === paper) {
        if (computerOption === paper) {
            document.getElementById("winner").textContent = ("try again");
        }
        else if (computerOption === rock) {
            document.getElementById("winner").textContent = ("the player is winner");
            score_player++;
            document.getElementById("score_player").textContent = `${score_player}`;
        } else if (computerOption === scissors) {
            document.getElementById("winner").textContent = ("the computer is winner");
            score_computer++;
            document.getElementById("score_computer").textContent = `${score_computer}`;
        }
    } else if (player_hand === scissors) {
        if (computerOption === scissors) {
            document.getElementById("winner").textContent = ("try again");
        } else if (computerOption === rock) {
            document.getElementById("winner").textContent = ("the computer is winner");
            score_computer++;
            document.getElementById("score_computer").textContent = `${score_computer}`;
        }
        else if (computerOption === paper) {
            document.getElementById("winner").textContent = ("the player is winner");
            score_player++;
            document.getElementById("score_player").textContent = `${score_player}`;
        }
    }
    palyAgain()
}

// paly again 
function palyAgain() {
    play_again.textContent = 'Play Again';
}


function resetContents() {
    score_player = 0;
    score_computer = 0;
    document.getElementById("score_computer").textContent = 0;
    document.getElementById("score_player").textContent = 0;
    document.getElementById("winner").textContent = (" ");
    player_hand.src = whiteImg;
    computer_hand.src = whiteImg;
}

play_again.addEventListener("click", function () {
    palyAgain()

    // scissors button
    scissorsButton.addEventListener("click", function () {
        player_hand.src = scissors;
        const computerOption = computer();
        compareChoice(scissors, computerOption);
    });

    // rock button
    rockButton.addEventListener("click", function () {
        player_hand.src = rock;
        const computerOption = computer();
        compareChoice(rock, computerOption);
    });

    // paper button
    paperButton.addEventListener("click", function () {
        player_hand.src = paper;
        const computerOption = computer();
        compareChoice(paper, computerOption);
    });

    resetContents();
});



