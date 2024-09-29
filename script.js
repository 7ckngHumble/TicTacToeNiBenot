let currentPlayer = 'X';
let cells = document.getElementsByClassName('cell');
let status = document.getElementById('status');

function makeMove(cell) {
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    
    if (checkWin()) {
      status.textContent = currentPlayer + ' wins!';
      for (let cell of cells) {
        cell.onclick = null;
      }
    } else if (checkDraw()) {
      status.textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      status.textContent = "Current Player: " + currentPlayer;
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    if (
      cells[combo[0]].textContent &&
      cells[combo[0]].textContent === cells[combo[1]].textContent &&
      cells[combo[0]].textContent === cells[combo[2]].textContent
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  for (const cell of cells) {
    if (!cell.textContent) {
      return false;
    }
  }
  return true;
}
