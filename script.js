const cells = document.querySelectorAll(".cell");

const status = document.getElementById("status");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");

const newGameButton = document.getElementById("newGame");
const resetScoreButton = document.getElementById("resetScore");

// FIXED: Added the 9th element to properly track all 9 cells on the board
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

let scores = {
    X: 0,
    O: 0
};

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playMove(index) {

    if (gameOver) {
        return;
    }

    if (board[index] !== "") {
        return;
    }

    board[index] = currentPlayer;

    cells[index].textContent = currentPlayer;

    cells[index].classList.add(
        currentPlayer === "X" ? "x" : "o"
    );

    checkGame();
}


/* Add click handling to every cell */

cells.forEach(function(cell, index) {

    cell.addEventListener("click", function() {
        playMove(index);
    });

});


/* Check win or draw */

function checkGame() {

    for (let pattern of winningPatterns) {

        const a = pattern[0];
        const b = pattern[1];
        const c = pattern[2];

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {

            gameOver = true;

            scores[currentPlayer]++;

            updateScore();

            status.textContent =
                "Player " + currentPlayer + " Wins!";

            cells[a].classList.add("winner");
            cells[b].classList.add("winner");
            cells[c].classList.add("winner");

            return;
        }
    }


    /* Check draw */

    if (!board.includes("")) {

        gameOver = true;

        status.textContent = "It's a Draw!";

        return;
    }


    /* Change player */

    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }

    status.textContent =
        "Player " + currentPlayer + "'s Turn";
}


/* Update score */

function updateScore() {

    scoreX.textContent = scores.X;
    scoreO.textContent = scores.O;
}


/* Start new game */

function startNewGame() {

    // FIXED: Ensured 9 elements here as well during reset
    board = ["", "", "", "", "", "", "", "", ""];

    currentPlayer = "X";

    gameOver = false;

    cells.forEach(function(cell) {

        cell.textContent = "";

        cell.classList.remove("x");
        cell.classList.remove("o");
        cell.classList.remove("winner");

    });

    status.textContent = "Player X's Turn";
}


/* Reset score */

function resetScores() {

    scores.X = 0;
    scores.O = 0;

    updateScore();

    startNewGame();
}


/* Buttons */

newGameButton.addEventListener("click", startNewGame);

resetScoreButton.addEventListener("click", resetScores);