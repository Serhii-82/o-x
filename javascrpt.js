const board = document.querySelector('#board');
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let winningCombination = [];

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
  }
}

function handleCellClick(event) {
  const messageTurn = document.querySelector('#message');
  const cellIndex = event.target.dataset.index;

  if (gameBoard[cellIndex] !== '') return; // Prevent overwriting a cell

  event.target.textContent = currentPlayer;
  gameBoard[cellIndex] = currentPlayer;

  if (checkWinner()) {
    messageTurn.textContent = `${currentPlayer} wins!`;
    drawWinner();
    autoReset();
  } else if (gameBoard.every(cell => cell !== '')) {
    messageTurn.textContent = 'It\'s a draw!';
    autoReset();
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageTurn.textContent = `Turn ${currentPlayer}`;
  }
}

function checkWinner() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      winningCombination = combination;
      return true;
    }
  }
  return false;
}

function drawWinner() {
  const line = document.createElement('div');
  line.classList.add('line');
  board.appendChild(line);

  const [start, , end] = winningCombination;

  if (start === 0 && end === 2) {
    line.style.left = '0';
    line.style.top = '50px';
  } else if (start === 3 && end === 5) {
    line.style.left = '0';
    line.style.top = '150px';
  } else if (start === 6 && end === 8) {
    line.style.left = '0';
    line.style.top = '250px';
  } else if (start === 0 && end === 6) {
    line.style.left = '55px';
    line.style.top = '0';
    line.style.transform = 'rotate(90deg)';
    line.style.width = '322px';
  } else if (start === 1 && end === 7) {
    line.style.left = '160px';
    line.style.top = '0';
    line.style.transform = 'rotate(90deg)';
    line.style.width = '322px';
  } else if (start === 2 && end === 8) {
    line.style.left = '265px';
    line.style.top = '0';
    line.style.transform = 'rotate(90deg)';
    line.style.width = '322px';
  } else if (start === 0 && end === 8) {
    line.style.left = '0';
    line.style.top = '0';
    line.style.transform = 'rotate(45deg)';
    line.style.width = '444px';
  } else if (start === 2 && end === 6) {
    line.style.left = '0';
    line.style.top = '0';
    line.style.transform = 'rotate(-45deg)';
    line.style.width = '444px';
  }
}

function autoReset() {
  setTimeout(() => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.textContent = '';
      cell.addEventListener('click', handleCellClick);
    });
    const line = document.querySelector('.line');
    if (line) line.remove();
    document.getElementById('message').textContent = 'Turn X';
  }, 3000); // 3 seconds
}

const resetButton = document.querySelector('#resetBtn');
resetButton.addEventListener('click', () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.textContent = '';
    cell.addEventListener('click', handleCellClick);
  });
  const line = document.querySelector('.line');
  if (line) line.remove();
  document.getElementById('message').textContent = 'Turn X';
});

createBoard();
document.getElementById('message').textContent = 'Turn X';








//cedtet tu  jaroslaw medvedenko





































































