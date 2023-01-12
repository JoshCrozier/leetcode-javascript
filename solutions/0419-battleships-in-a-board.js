/**
 * 419. Battleships in a Board
 * https://leetcode.com/problems/battleships-in-a-board/
 * Difficulty: Medium
 *
 * Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the
 * number of the battleships on board.
 *
 * Battleships can only be placed horizontally or vertically on board. In other words, they
 * can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where
 * k can be of any size. At least one horizontal or vertical cell separates between two
 * battleships (i.e., there are no adjacent battleships).
 */

/**
 * @param {character[][]} boardx
 * @return {number}
 */
var countBattleships = function(board) {
  let count = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X' && board[i][j - 1] !== 'X' && (!board[i - 1] || board[i - 1][j] !== 'X')) {
        count++;
      }
    }
  }

  return count;
};
