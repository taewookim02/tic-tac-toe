const Gameboard = (() => {
  const _board = new Array(9);

  return { _board };
})();

const DisplayController = (() => {
  const _gridCellNode = document.querySelectorAll(".grid-cell");
  const _messageNode = document.querySelector(".message");

  // function to render contents of Gameboard._board to the DOM
  const render = () => {
    _gridCellNode.forEach((cell, index) => {
      cell.textContent = Gameboard._board[index];
    });
  };

  // update .message
  const updateMessage = (message) => {
    _messageNode.textContent = message;
  };

  const _handleClick = (e) => {
    // check if the cell is empty
    if (e.target.textContent === "") {
      Game.addMark(e.target.dataset.index);
    }
  };

  // function to add event listeners to grid cells
  const addEventListeners = () => {
    _gridCellNode.forEach((cell) => {
      cell.addEventListener("click", _handleClick);
    });
  };

  // function to remove event listeners from grid cells
  const removeEventListeners = () => {
    _gridCellNode.forEach((cell) => {
      cell.removeEventListener("click", _handleClick);
    });
  };

  return { render, addEventListeners, updateMessage, removeEventListeners };
})();

const Players = (name, mark) => {
  return { name, mark };
};

// tic-tac-toe game module
const Game = (() => {
  // private variables
  const _player1 = Players("Player 1", "X");
  const _player2 = Players("Player 2", "O");
  let _currentPlayer = _player1;
  let _isGameOver = false;
  let _isWon = false;
  let _isTie = false;

  // private functions
  const _switchPlayer = () => {
    // this doesn't work for tie
    if (_isWon) {
      return DisplayController.updateMessage(`${_currentPlayer.mark} wins!`);
    }
    if (_isTie) {
      return DisplayController.updateMessage("It's a tie!");
    }

    _currentPlayer = _currentPlayer === _player1 ? _player2 : _player1;

    if (!_isGameOver) {
      DisplayController.updateMessage(`${_currentPlayer.mark}'s turn`);
    }
  };

  // check if there is a winner
  const _checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombinations.forEach((combination, i) => {
      if (
        Gameboard._board[combination[0]] === _currentPlayer.mark &&
        Gameboard._board[combination[1]] === _currentPlayer.mark &&
        Gameboard._board[combination[2]] === _currentPlayer.mark
      ) {
        // update message
        DisplayController.updateMessage(`${_currentPlayer.mark} wins!`);

        // end the game
        _endGame();
        _isWon = true;
      }
    });
  };

  const _checkTie = () => {
    // check if there is a tie
    if (!Gameboard._board.includes(undefined)) {
      // update message
      DisplayController.updateMessage("It's a tie!");
      _endGame();
      _isTie = true;
    }
  };

  // function that allow players to add marks to the board
  const addMark = (index) => {
    // add mark to the board
    Gameboard._board[index] = _currentPlayer.mark;
    DisplayController.render();
    _checkWinner();
    _checkTie();
    _switchPlayer();
  };

  // stop the game
  const _endGame = () => {
    // remove event listeners from grid cells
    DisplayController.removeEventListeners();
    _isGameOver = true;
  };

  // function that initializes the game
  const startGame = () => {
    DisplayController.render();
    DisplayController.addEventListeners();
    DisplayController.updateMessage(`${_currentPlayer.mark}'s turn`);
  };

  return { startGame, addMark };
})();

Game.startGame();
