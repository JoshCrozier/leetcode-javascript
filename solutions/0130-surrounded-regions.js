/**
 * 130. Surrounded Regions
 * https://leetcode.com/problems/surrounded-regions/
 * Difficulty: Medium
 *
 * You are given an m x n matrix board containing letters 'X' and 'O', capture regions
 * that are surrounded:
 * - Connect: A cell is connected to adjacent cells horizontally or vertically.
 * - Region: To form a region connect every 'O' cell.
 * - Surround: The region is surrounded with 'X' cells if you can connect the region with
 * 'X' cells and none of the region cells are on the edge of the board.
 *
 * To capture a surrounded region, replace all 'O's with 'X's in-place within the original
 * board. You do not need to return anything.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O'
          && (!i || !j || i === board.length - 1 || j === board[0].length - 1)) {
        dfs(i, j);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === '-') {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }

  function dfs(i, j) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length
        || board[i][j] === '-' || board[i][j] === 'X') {
      return;
    }

    board[i][j] = '-';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
};
