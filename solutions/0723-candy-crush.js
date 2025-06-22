/**
 * 723. Candy Crush
 * https://leetcode.com/problems/candy-crush/
 * Difficulty: Medium
 *
 * This question is about implementing a basic elimination algorithm for Candy Crush.
 *
 * Given an m x n integer array board representing the grid of candy where board[i][j] represents
 * the type of candy. A value of board[i][j] == 0 represents that the cell is empty.
 *
 * The given board represents the state of the game following the player's move. Now, you need to
 * restore the board to a stable state by crushing candies according to the following rules:
 * - If three or more candies of the same type are adjacent vertically or horizontally, crush them
 *   all at the same time - these positions become empty.
 * - After crushing all candies simultaneously, if an empty space on the board has candies on top
 *   of itself, then these candies will drop until they hit a candy or bottom at the same time.
 *   No new candies will drop outside the top boundary.
 * - After the above steps, there may exist more candies that can be crushed. If so, you need to
 *   repeat the above steps.
 * - If there does not exist more candies that can be crushed (i.e., the board is stable), then
 *   return the current board.
 *
 * You need to perform the above rules until the board becomes stable, then return the stable board.
 */

/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
  const rows = board.length;
  const cols = board[0].length;

  while (markCrushables()) {
    dropCandies();
  }

  return board;

  function markCrushables() {
    let hasCrushables = false;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols - 2; col++) {
        const candy = Math.abs(board[row][col]);
        if (candy !== 0 && candy === Math.abs(board[row][col + 1])
            && candy === Math.abs(board[row][col + 2])) {
          hasCrushables = true;
          board[row][col] = -candy;
          board[row][col + 1] = -candy;
          board[row][col + 2] = -candy;
        }
      }
    }

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows - 2; row++) {
        const candy = Math.abs(board[row][col]);
        if (candy !== 0 && candy === Math.abs(board[row + 1][col])
            && candy === Math.abs(board[row + 2][col])) {
          hasCrushables = true;
          board[row][col] = -candy;
          board[row + 1][col] = -candy;
          board[row + 2][col] = -candy;
        }
      }
    }

    return hasCrushables;
  }

  function dropCandies() {
    for (let col = 0; col < cols; col++) {
      let bottom = rows - 1;
      for (let row = rows - 1; row >= 0; row--) {
        if (board[row][col] > 0) {
          board[bottom][col] = board[row][col];
          if (bottom !== row) {
            board[row][col] = 0;
          }
          bottom--;
        } else if (board[row][col] < 0) {
          board[row][col] = 0;
        }
      }
    }
  }
};
