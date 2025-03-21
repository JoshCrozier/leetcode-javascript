/**
 * 864. Shortest Path to Get All Keys
 * https://leetcode.com/problems/shortest-path-to-get-all-keys/
 * Difficulty: Hard
 *
 * You are given an m x n grid grid where:
 * - '.' is an empty cell.
 * - '#' is a wall.
 * - '@' is the starting point.
 * - Lowercase letters represent keys.
 * - Uppercase letters represent locks.
 *
 * You start at the starting point and one move consists of walking one space in one of the
 * four cardinal directions. You cannot walk outside the grid, or walk into a wall.
 *
 * If you walk over a key, you can pick it up and you cannot walk over a lock unless you have
 * its corresponding key.
 *
 * For some 1 <= k <= 6, there is exactly one lowercase and one uppercase letter of the first
 * k letters of the English alphabet in the grid. This means that there is exactly one key for
 * each lock, and one lock for each key; and also that the letters used to represent the keys
 * and locks were chosen in the same order as the English alphabet.
 *
 * Return the lowest number of moves to acquire all keys. If it is impossible, return -1.
 */

/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let startRow;
  let startCol;
  let totalKeys = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '@') {
        startRow = i;
        startCol = j;
      } else if (/[a-f]/.test(grid[i][j])) {
        totalKeys++;
      }
    }
  }

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const queue = [[startRow, startCol, 0, 0]];
  const visited = new Set([`${startRow},${startCol},0`]);

  while (queue.length) {
    const [row, col, keys, steps] = queue.shift();
    if (keys === (1 << totalKeys) - 1) return steps;
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow >= 0 && newRow < rows && newCol >= 0
          && newCol < cols && grid[newRow][newCol] !== '#') {
        const cell = grid[newRow][newCol];
        const newKeys = /[a-f]/.test(cell)
          ? keys | (1 << (cell.charCodeAt(0) - 97))
          : keys;

        if (/[A-F]/.test(cell) && !(keys & (1 << (cell.charCodeAt(0) - 65)))) continue;
        const state = `${newRow},${newCol},${newKeys}`;
        if (!visited.has(state)) {
          visited.add(state);
          queue.push([newRow, newCol, newKeys, steps + 1]);
        }
      }
    }
  }

  return -1;
};
