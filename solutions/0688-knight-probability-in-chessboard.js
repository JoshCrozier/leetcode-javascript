/**
 * 688. Knight Probability in Chessboard
 * https://leetcode.com/problems/knight-probability-in-chessboard/
 * Difficulty: Medium
 *
 * On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly
 * k moves. The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right
 * cell is (n - 1, n - 1).
 *
 * A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells
 * in a cardinal direction, then one cell in an orthogonal direction.
 *
 * Each time the knight is to move, it chooses one of eight possible moves uniformly at random
 * (even if the piece would go off the chessboard) and moves there.
 *
 * The knight continues moving until it has made exactly k moves or has moved off the chessboard.
 *
 * Return the probability that the knight remains on the board after it has stopped moving.
 */

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
  const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
  const dp = new Map();

  return calc(k, row, column);

  function calc(movesLeft, r, c) {
    if (r < 0 || r >= n || c < 0 || c >= n) return 0;
    if (movesLeft === 0) return 1;

    const key = `${movesLeft},${r},${c}`;
    if (dp.has(key)) return dp.get(key);

    let prob = 0;
    for (const [dr, dc] of moves) {
      prob += calc(movesLeft - 1, r + dr, c + dc) / 8;
    }

    dp.set(key, prob);
    return prob;
  }
};
