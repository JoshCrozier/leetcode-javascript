/**
 * 348. Design Tic-Tac-Toe
 * https://leetcode.com/problems/design-tic-tac-toe/
 * Difficulty: Medium
 *
 * Assume the following rules are for the tic-tac-toe game on an n x n board between two players:
 * 1. A move is guaranteed to be valid and is placed on an empty block.
 * 2. Once a winning condition is reached, no more moves are allowed.
 * 3. A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal
 *    row wins the game.
 *
 * Implement the TicTacToe class:
 * - TicTacToe(int n) Initializes the object the size of the board n.
 * - int move(int row, int col, int player) Indicates that the player with id player plays at the
 *   cell (row, col) of the board. The move is guaranteed to be a valid move, and the two players
 *   alternate in making moves. Return
 *   - 0 if there is no winner after the move,
 *   - 1 if player 1 is the winner after the move, or
 *   - 2 if player 2 is the winner after the move.
 */

/**
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.size = n;
  this.rows = new Array(n).fill(0);
  this.cols = new Array(n).fill(0);
  this.diagonal = 0;
  this.antiDiagonal = 0;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  const value = player === 1 ? 1 : -1;

  this.rows[row] += value;
  this.cols[col] += value;

  if (row === col) {
    this.diagonal += value;
  }

  if (row + col === this.size - 1) {
    this.antiDiagonal += value;
  }

  if (Math.abs(this.rows[row]) === this.size || Math.abs(this.cols[col]) === this.size
    || Math.abs(this.diagonal) === this.size || Math.abs(this.antiDiagonal) === this.size) {
    return player;
  }

  return 0;
};
