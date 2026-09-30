# Tic-Tac-Toe - VOSC Activity 1

A simple two-player Tic-Tac-Toe game developed as part of VOSC Activity 1 using HTML, CSS and JavaScript.

## About the Project

Tic-Tac-Toe is a two-player game played on a 3x3 grid. Players take turns placing X and O on the board. The player who gets three matching symbols in a row, column or diagonal wins the game.

This project implements the complete game in the browser using only basic web technologies without any external libraries or frameworks.

## Features

- Two-player gameplay
- Interactive 3x3 game board
- Automatic win detection
- Draw detection
- Score tracking
- Highlighting of the winning cells
- New Game option
- Reset Score option
- Responsive design for different screen sizes
- No external libraries or frameworks

## Technologies Used

- HTML5 - Used to create the structure of the game
- CSS3 - Used for styling, layout, animations and responsive design
- JavaScript - Used to implement the game logic and user interactions

## How to Play

1. Player X starts the game.
2. Click on any empty cell to place X.
3. Player O gets the next turn.
4. Players continue taking turns.
5. The first player to get three matching symbols in a row, column or diagonal wins.
6. If all nine cells are filled and nobody wins, the game ends in a draw.
7. Click `New Game` to start another round.
8. Click `Reset Score` to clear the scores and start again.

## Game Logic

The board contains nine cells represented by indexes from 0 to 8.

```text
0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8