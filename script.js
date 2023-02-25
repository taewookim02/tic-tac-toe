const Gameboard = (() => {
  const _board = new Array(9);

  return { _board };
})();

const DisplayController = (() => {
  const _gridCellNode = document.querySelectorAll(".grid-cell");

  // function to render contents of Gameboard._board to the DOM
  const render = () => {
    _gridCellNode.forEach((cell, index) => {
      cell.textContent = Gameboard._board[index];
    });
  };

  // function to add event listeners to grid cells
  const addEventListeners = () => {
    _gridCellNode.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        // check if the cell is empty
        if (e.target.textContent === "") {
          Game.addMark(e.target.dataset.index);
        }
      });
    });
  };

  return { render, addEventListeners };
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

  // private functions
  const _switchPlayer = () => {
    _currentPlayer = _currentPlayer === _player1 ? _player2 : _player1;
  };

  // function that allow players to add marks to the board
  const addMark = (index) => {
    Gameboard._board[index] = _currentPlayer.mark;
    DisplayController.render();
    _switchPlayer();
  };

  // function that initializes the game
  const startGame = () => {
    DisplayController.render();
    DisplayController.addEventListeners();
  };

  return { startGame, addMark };
})();

Game.startGame();
