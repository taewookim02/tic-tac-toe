const Gameboard = (() => {
  const _board = new Array(9);

  return { _board };
})();

const DisplayController = (() => {
  const _cells = document.querySelectorAll("[data-cell]");

  const updateCell = (index, mark) => {
    _cells[index].textContent = mark;
  };

  const attachEventListenerToCells = (callback) => {
    _cells.forEach((val, i) => {
      val.addEventListener("click", callback);
    });
  };

  return { updateCell, attachEventListenerToCells, _cells };
})();

const Players = (name, mark) => {
  return { name, mark };
};

const Game = (() => {
  let _player1;
  let _player2;
  let _currentPlayer = _player1;
  let _gameOver = false;

  // get player1 and player2 names from form
  const _getNames = () => {
    const form = document.querySelector(".form");
    const player1Name = form.querySelector("#player1").value;
    const player2Name = form.querySelector("#player2").value;
    return { player1Name, player2Name };
  };

  const _checkForWinner = () => {
    const winningCombos = [
      // 8 winning combos
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal
      [2, 4, 6], // diagonal
    ];

    const board = Gameboard._board;

    winningCombos.forEach((combo) => {
      if (
        board[combo[0]] === board[combo[1]] &&
        board[combo[1]] === board[combo[2]] &&
        board[combo[0]] !== undefined
      ) {
        _gameOver = true;
        return console.log(`${_currentPlayer.name} wins!`);
      }
    });
  };

  const _handleCellClick = (e) => {
    if (_gameOver || e.target.textContent) return;

    // update board
    Gameboard._board[e.target.dataset.index] = _currentPlayer.mark;
    DisplayController.updateCell(e.target.dataset.index, _currentPlayer.mark);

    // check for winner
    _checkForWinner();

    // switch player
    if (_currentPlayer === _player1) {
      _currentPlayer = _player2;
    } else {
      _currentPlayer = _player1;
    }
  };

  const startNewGame = (player1Name, player2Name) => {
    _player1 = Players(player1Name, "X");
    _player2 = Players(player2Name, "O");
    _currentPlayer = _player1;
    _gameOver = false;
    DisplayController.attachEventListenerToCells(_handleCellClick);
  };

  return { startNewGame };
})();

Game.startNewGame("Player 1", "Player 2");
