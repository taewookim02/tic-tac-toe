const Gameboard = (() => {
  const board = ["O", "O", "X", "X", "O", "X", "X", "O", "X"];

  const DisplayController = () => {
    const cells = document.querySelectorAll("[data-cell]");
    cells.forEach((val, i) => {
      val.textContent = board[i];
    });
  };

  DisplayController();
  return { DisplayController };
})();

const Players = (name, mark) => {
  return { name, mark };
};

// Build the functions that allow players to add marks to a specific spot on the board

// Tie it to the Dom

// Let players click on the gameboard to place marker

// Logic should block players playing taken spots
