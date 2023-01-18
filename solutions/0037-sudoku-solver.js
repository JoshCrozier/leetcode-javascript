/**
 * 37. Sudoku Solver
 * https://leetcode.com/problems/sudoku-solver/
 * Difficulty: Hard
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 *
 * A sudoku solution must satisfy all of the following rules:
 * - Each of the digits 1-9 must occur exactly once in each row.
 * - Each of the digits 1-9 must occur exactly once in each column.
 * - Each of the digits 1-9 must occur exactly once in each of the
 *   9 3x3 sub-boxes of the grid.
 * - The '.' character indicates empty cells.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '.') {
        for (let k = 1; k < 10; k++) {
          if (isValid(board, i, j, k.toString())) {
            board[i][j] = k.toString();
            const solution = solveSudoku(board);
            if (solution !== false) {
              return solution;
            }
            board[i][j] = '.';
          }
        }
        return false;
      }
    }
  }

  return board;
};

function isValid(board, i, j, k) {
  for (let index = 0; index < board.length; index++) {
    if (board[i][index] === k) return false;
    if (board[index][j] === k) return false;
    const [x, y] = [
      3 * Math.floor(i / 3) + Math.floor(index / 3),
      3 * Math.floor(j / 3) + index % 3,
    ];
    if (board[x][y] === k) {
      return false;
    }
  }

  return true;
}
