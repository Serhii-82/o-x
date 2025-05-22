# Kółko i Krzyżyk (Tic-Tac-Toe)

A simple, interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript.

## Features

- Interactive 3x3 game board.
- Two-player mode (X and O).
- Highlights the winning line.
- Displays whose turn it is.
- Automatic reset after a win or draw (3 seconds).
- Manual reset button.

## How to Play

1. Open `index.html` in your browser.
2. Click on a cell to make your move.
3. Players alternate turns between X and O.
4. After a win or draw, the game resets automatically. You can also reset manually with the "Reset" button.

## Main Functions

- **createBoard()**: Creates and displays the 3x3 board.
- **handleCellClick(event)**: Handles moves, updates the board, and checks for win/draw.
- **checkWinner()**: Checks if there is a winning combination.
- **drawWinner()**: Highlights the winning line when someone wins.
- **autoReset()**: Automatically resets the game after win/draw.
- **resetButton**: Allows manual restart.

## Files

- `index.html` — Main HTML file.
- `staiel.css` — Styles for the game.
- `javascrpt.js` — Game logic.

## Example Game Board
```
X | O | X
O | X | O
X | | O
```

## Author

[Serhii-82](https://github.com/Serhii-82)
