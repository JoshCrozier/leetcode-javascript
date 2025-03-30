/**
 * 999. Available Captures for Rook
 * https://leetcode.com/problems/available-captures-for-rook/
 * Difficulty: Easy
 *
 * You are given an 8 x 8 matrix representing a chessboard. There is exactly one white rook
 * represented by 'R', some number of white bishops 'B', and some number of black pawns 'p'.
 * Empty squares are represented by '.'.
 *
 * A rook can move any number of squares horizontally or vertically (up, down, left, right)
 * until it reaches another piece or the edge of the board. A rook is attacking a pawn if it
 * can move to the pawn's square in one move.
 *
 * Note: A rook cannot move through other pieces, such as bishops or pawns. This means a rook
 * cannot attack a pawn if there is another piece blocking the path.
 *
 * Return the number of pawns the white rook is attacking.
 */

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let rookRow;
  let rookCol;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        rookRow = i;
        rookCol = j;
        break;
      }
    }
  }

  const result = countPawns(-1, 0) + countPawns(1, 0)
    + countPawns(0, -1) + countPawns(0, 1);

  return result;

  function countPawns(rowStep, colStep) {
    let row = rookRow + rowStep;
    let col = rookCol + colStep;

    while (row >= 0 && row < 8 && col >= 0 && col < 8) {
      if (board[row][col] === 'p') return 1;
      if (board[row][col] === 'B') return 0;
      row += rowStep;
      col += colStep;
    }
    return 0;
  }
};
