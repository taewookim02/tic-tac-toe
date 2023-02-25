# tic-tac-toe

![Preview of tic-tac-toew](preview.png)

Live preview: https://taewookim02.github.io/tic-tac-toe/

This is a simple tic-tac-toe game created using HTML, CSS, and JavaScript. You can play the game by clicking on the cells of the game board to place your marks and try to get three in a row.

## Implementation

Designed to have as little global code as possible, with most of the functionality tucked away inside of a <strong>module</strong> or <strong>factory</strong>.

The game logic is contained within the `Game` module, which handles game initialization, turn-taking, win/lose/tie checking, and board resetting. The `Gameboard` module contains the data for the game board, and the `DisplayController` module handles rendering the board to the DOM, adding and removing event listeners, and updating the message.

## Future Improvements

- Implement AI opponent
- Add scoring system
- Allow users to choose their markers
- Improve the visual design of the UI

## Technologies Used

- HTML
- CSS
- JavaScript
