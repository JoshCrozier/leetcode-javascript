/**
 * 2664. The Knight’s Tour
 * https://leetcode.com/problems/the-knights-tour/
 * Difficulty: Medium
 *
 * Given two positive integers m and n which are the height and width of a 0-indexed 2D-array
 * board, a pair of positive integers (r, c) which is the starting position of the knight on
 * the board.
 *
 * Your task is to find an order of movements for the knight, in a manner that every cell of
 * the board gets visited exactly once (the starting cell is considered visited and you
 * shouldn't visit it again).
 *
 * Return the array board in which the cells' values show the order of visiting the cell
 * starting from 0 (the initial place of the knight).
 *
 * Note that a knight can move from cell (r1, c1) to cell (r2, c2) if 0 <= r2 <= m - 1 and
 * 0 <= c2 <= n - 1 and min(abs(r1 - r2), abs(c1 - c2)) = 1 and max(abs(r1 - r2), abs(c1 - c2)) = 2.
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var tourOfKnight = function(m, n, r, c) {
  const board = new Array(m).fill().map(() => new Array(n).fill(-1));
  const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];

  backtrack(r, c, 0);
  return board;

  function isValid(row, col) {
    return row >= 0 && row < m && col >= 0 && col < n && board[row][col] === -1;
  }

  function getDegree(row, col) {
    let count = 0;
    for (const [dr, dc] of moves) {
      if (isValid(row + dr, col + dc)) count++;
    }
    return count;
  }

  function backtrack(row, col, moveCount) {
    board[row][col] = moveCount;

    if (moveCount === m * n - 1) return true;

    const nextMoves = [];
    for (const [dr, dc] of moves) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (isValid(newRow, newCol)) {
        nextMoves.push([newRow, newCol, getDegree(newRow, newCol)]);
      }
    }

    nextMoves.sort((a, b) => a[2] - b[2]);

    for (const [newRow, newCol] of nextMoves) {
      if (backtrack(newRow, newCol, moveCount + 1)) return true;
    }

    board[row][col] = -1;
    return false;
  }
};
