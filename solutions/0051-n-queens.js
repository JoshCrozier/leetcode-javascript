/**
 * 51. N-Queens
 * https://leetcode.com/problems/n-queens/
 * Difficulty: Hard
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n
 * chessboard such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens
 * puzzle. You may return the answer in any order.
 *
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space,
 * respectively.
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const result = [];
  backtrack(result, n);
  return result;
};

function backtrack(result, n, board = [], size = 0) {
  if (n === size) {
    result.push(board.map(s => `${'.'.repeat(s)}Q${'.'.repeat(n - s - 1)}`));
  } else {
    for (let rows = 0; rows < n; rows++) {
      const isValid = !board.some((i, j) => {
        return i === rows || i === rows + size - j || i === rows - size + j;
      });
      if (isValid) {
        board.push(rows);
        backtrack(result, n, board, size + 1);
        board.pop();
      }
    }
  }
}
