Kółko i Krzyżyk (Tic-Tac-Toe)
A simple Tic-Tac-Toe game written in HTML, CSS, and JavaScript.

Features
Interactive 3x3 game board
Two-player mode (X and O)
Highlights the winning line
Displays whose turn it is
Automatic reset after a win or draw (3 seconds)
Manual reset button
How to Play
Open index.html in your browser.
Click on a cell to make your move.
The turn alternates between X and O.
After a win or a draw, the game resets automatically. You can also reset manually using the "Reset" button.
Main Functions
createBoard()
Creates and displays the 3x3 game board.

handleCellClick(event)
Handles a player's move, updates the board, checks for a win or draw.

checkWinner()
Checks if there is a winning combination on the board.

drawWinner()
Highlights the winning line if someone wins.

autoReset()
Automatically resets the game after a win or draw.

resetButton
Allows players to manually restart the game.

Files
index.html — Main HTML file
staiel.css — Styles for the game board
javascrpt.js — Game logic
Example Game Board
Code
X | O | X
---------
O | X | O
---------
X |   | O
Author
Serhii-82
