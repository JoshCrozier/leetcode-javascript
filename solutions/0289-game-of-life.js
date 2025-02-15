/**
 * 289. Game of Life
 * https://leetcode.com/problems/game-of-life/
 * Difficulty: Medium
 *
 * According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular
 * automaton devised by the British mathematician John Horton Conway in 1970."
 *
 * The board is made up of an m x n grid of cells, where each cell has an initial state: live
 * (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors
 * (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia
 * article):
 * 1. Any live cell with fewer than two live neighbors dies as if caused by under-population.
 * 2. Any live cell with two or three live neighbors lives on to the next generation.
 * 3. Any live cell with more than three live neighbors dies, as if by over-population.
 * 4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 *
 * The next state of the board is determined by applying the above rules simultaneously to every
 * cell in the current state of the m x n grid board. In this process, births and deaths occur
 * simultaneously.
 *
 * Given the current state of the board, update the board to reflect its next state.
 *
 * Note that you do not need to return anything.
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const directions = [[1, -1], [1, 0], [1, 1], [0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1]];
  const r = board.length;
  const c = board[0].length;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let lives = 0;
      for (const d of directions) {
        if (d[0] + i < 0 || d[0] + i >= r || d[1] + j < 0 || d[1] + j >= c) {
          continue;
        } else if (board[d[0] + i][d[1] + j] === 1 || board[d[0] + i][d[1] + j] === 2) {
          lives++;
        }
      }
      if (board[i][j] === 0 && lives === 3) {
        board[i][j] = 3;
      } else if (board[i][j] === 1 && (lives < 2 || lives > 3)) {
        board[i][j] = 2;
      }
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      board[i][j] %= 2;
    }
  }
};
