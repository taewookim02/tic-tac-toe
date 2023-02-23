const Gameboard = (() => {
  const _board = new Array(9);

  return { _board };
})();

const DisplayController = (() => {
  const _cells = document.querySelectorAll("[data-cell]");

  const _handleCellClick = (e) => {
    if (e.target.textContent) return;
    if (main.currentPlayer.mark === "X") {
      e.target.textContent = "X";
      return (main.currentPlayer = main.player2);
    } else {
      e.target.textContent = "O";
      return (main.currentPlayer = main.player1);
    }
  };

  const loadBoard = () => {
    _cells.forEach((val, i) => {
      val.textContent = Gameboard._board[i];
    });
  };

  const attachEventListenerToCells = () => {
    _cells.forEach((val, i) => {
      val.addEventListener("click", _handleCellClick);
    });
  };

  return { loadBoard, attachEventListenerToCells };
})();

const Players = (name, mark) => {
  return { name, mark };
};

const main = (() => {
  DisplayController.attachEventListenerToCells();
  const player1 = Players("John Doe", "X");
  const player2 = Players("Alice Kwon", "O");
  // player1 goes first
  let currentPlayer = player1;

  return { currentPlayer, player1, player2 };
})();

// For the sake of developing the logic and have some progress, I am going to start with X

// Build the functions that allow players to add marks to a specific spot on the board

// Let players click on the gameboard to place marker

// Logic should block players playing taken spots
