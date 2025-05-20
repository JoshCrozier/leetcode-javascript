/**
 * 2267. Check if There Is a Valid Parentheses String Path
 * https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/
 * Difficulty: Hard
 *
 * A parentheses string is a non-empty string consisting only of '(' and ')'. It is valid if any of
 * the following conditions is true:
 * - It is ().
 * - It can be written as AB (A concatenated with B), where A and B are valid parentheses strings.
 * - It can be written as (A), where A is a valid parentheses string.
 *
 * You are given an m x n matrix of parentheses grid. A valid parentheses string path in the grid
 * is a path satisfying all of the following conditions:
 * - The path starts from the upper left cell (0, 0).
 * - The path ends at the bottom-right cell (m - 1, n - 1).
 * - The path only ever moves down or right.
 * - The resulting parentheses string formed by the path is valid.
 *
 * Return true if there exists a valid parentheses string path in the grid. Otherwise, return false.
 */

/**
* @param {character[][]} grid
* @return {boolean}
*/
var hasValidPath = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  if ((m + n - 1) % 2 !== 0) {
    return false;
  }

  if (grid[0][0] === ')' || grid[m - 1][n - 1] === '(') {
    return false;
  }

  const visited = new Set();
  return dfs(0, 0, 0);

  function dfs(i, j, openCount) {
    if (i >= m || j >= n || openCount < 0) {
      return false;
    }
    openCount += grid[i][j] === '(' ? 1 : -1;
    if (i === m - 1 && j === n - 1) {
      return openCount === 0;
    }
    const key = `${i},${j},${openCount}`;
    if (visited.has(key)) {
      return false;
    }
    visited.add(key);

    return dfs(i + 1, j, openCount) || dfs(i, j + 1, openCount);
  }
};
