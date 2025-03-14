/**
 * 782. Transform to Chessboard
 * https://leetcode.com/problems/transform-to-chessboard/
 * Difficulty: Hard
 *
 * You are given an n x n binary grid board. In each move, you can swap any two rows with each
 * other, or any two columns with each other.
 *
 * Return the minimum number of moves to transform the board into a chessboard board. If the
 * task is impossible, return -1.
 *
 * A chessboard board is a board where no 0's and no 1's are 4-directionally adjacent.
 */

/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function(board) {
  const n = board.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((board[0][0] ^ board[i][0] ^ board[0][j] ^ board[i][j]) === 1) {
        return -1;
      }
    }
  }

  let rowSum = 0;
  let colSum = 0;
  let rowSwaps = 0;
  let colSwaps = 0;

  for (let i = 0; i < n; i++) {
    rowSum += board[0][i];
    colSum += board[i][0];

    if (board[i][0] === i % 2) rowSwaps++;
    if (board[0][i] === i % 2) colSwaps++;
  }

  if (rowSum !== Math.floor(n / 2) && rowSum !== Math.ceil(n / 2)) return -1;
  if (colSum !== Math.floor(n / 2) && colSum !== Math.ceil(n / 2)) return -1;

  if (n % 2 === 1) {
    if (rowSwaps % 2 === 1) rowSwaps = n - rowSwaps;
    if (colSwaps % 2 === 1) colSwaps = n - colSwaps;
  } else {
    rowSwaps = Math.min(rowSwaps, n - rowSwaps);
    colSwaps = Math.min(colSwaps, n - colSwaps);
  }

  return Math.floor((rowSwaps + colSwaps) / 2);
};
