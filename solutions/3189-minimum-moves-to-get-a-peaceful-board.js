/**
 * 3189. Minimum Moves to Get a Peaceful Board
 * https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/
 * Difficulty: Medium
 *
 * Given a 2D array rooks of length n, where rooks[i] = [xi, yi] indicates the position of a
 * rook on an n x n chess board. Your task is to move the rooks 1 cell at a time vertically
 * or horizontally (to an adjacent cell) such that the board becomes peaceful.
 *
 * A board is peaceful if there is exactly one rook in each row and each column.
 *
 * Return the minimum number of moves required to get a peaceful board.
 *
 * Note that at no point can there be two rooks in the same cell.
 */

/**
 * @param {number[][]} rooks
 * @return {number}
 */
var minMoves = function(rooks) {
  const rows = rooks.map(rook => rook[0]).sort((a, b) => a - b);
  const cols = rooks.map(rook => rook[1]).sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < rooks.length; i++) {
    result += Math.abs(rows[i] - i) + Math.abs(cols[i] - i);
  }

  return result;
};
