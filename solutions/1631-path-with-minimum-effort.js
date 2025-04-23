/**
 * 1631. Path With Minimum Effort
 * https://leetcode.com/problems/path-with-minimum-effort/
 * Difficulty: Medium
 *
 * You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size
 * rows x columns, where heights[row][col] represents the height of cell (row, col). You are
 * situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell,
 * (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish
 * to find a route that requires the minimum effort.
 *
 * A route's effort is the maximum absolute difference in heights between two consecutive
 * cells of the route.
 *
 * Return the minimum effort required to travel from the top-left cell to the bottom-right cell.
 */

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  function canReach(maxEffort) {
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length) {
      const [row, col] = queue.shift();
      if (row === rows - 1 && col === cols - 1) return true;

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (newRow >= 0 && newRow < rows && newCol >= 0
            && newCol < cols && !visited[newRow][newCol]) {
          const effort = Math.abs(heights[newRow][newCol] - heights[row][col]);
          if (effort <= maxEffort) {
            visited[newRow][newCol] = true;
            queue.push([newRow, newCol]);
          }
        }
      }
    }
    return false;
  }

  let left = 0;
  let right = 1000000;
  let result = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canReach(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};
