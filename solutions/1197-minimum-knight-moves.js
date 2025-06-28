/**
 * 1197. Minimum Knight Moves
 * https://leetcode.com/problems/minimum-knight-moves/
 * Difficulty: Medium
 *
 * In an infinite chess board with coordinates from -infinity to +infinity, you have
 * a knight at square [0, 0].
 *
 * A knight has 8 possible moves it can make, as illustrated below. Each move is two
 * squares in a cardinal direction, then one square in an orthogonal direction.
 *
 * Return the minimum number of steps needed to move the knight to the square [x, y].
 * It is guaranteed the answer exists.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);

  const memo = new Map();
  return dfs(x, y);

  function dfs(currX, currY) {
    if (currX + currY === 0) return 0;
    if (currX + currY === 2) return 2;

    const key = `${currX},${currY}`;
    if (memo.has(key)) return memo.get(key);

    const result = Math.min(
      dfs(Math.abs(currX - 1), Math.abs(currY - 2)),
      dfs(Math.abs(currX - 2), Math.abs(currY - 1))
    ) + 1;

    memo.set(key, result);
    return result;
  }
};
