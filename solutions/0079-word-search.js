/**
 * 79. Word Search
 * https://leetcode.com/problems/word-search/
 * Difficulty: Medium
 *
 * Given an m x n grid of characters board and a string word, return true if word exists
 * in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent
 * cells are horizontally or vertically neighboring. The same letter cell may not be used
 * more than once.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  function backtrack(x, y, k) {
    if (board[x][y] !== word[k]) {
      return false;
    } else if (k === word.length - 1) {
      return true;
    }

    board[x][y] = '-';

    for (const direction of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
      const [i, j] = [x + direction[0], y + direction[1]];
      if (i >= 0 && i < board.length && j >= 0 && j < board[0].length) {
        if (backtrack(i, j, k + 1)) {
          return true;
        }
      }
    }

    board[x][y] = word[k];

    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (backtrack(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};
