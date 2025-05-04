/**
 * 1970. Last Day Where You Can Still Cross
 * https://leetcode.com/problems/last-day-where-you-can-still-cross/
 * Difficulty: Hard
 *
 * There is a 1-based binary matrix where 0 represents land and 1 represents water. You are given
 * integers row and col representing the number of rows and columns in the matrix, respectively.
 *
 * Initially on day 0, the entire matrix is land. However, each day a new cell becomes flooded
 * with water. You are given a 1-based 2D array cells, where cells[i] = [ri, ci] represents that
 * on the ith day, the cell on the rith row and cith column (1-based coordinates) will be covered
 * with water (i.e., changed to 1).
 *
 * You want to find the last day that it is possible to walk from the top to the bottom by only
 * walking on land cells. You can start from any cell in the top row and end at any cell in the
 * bottom row. You can only travel in the four cardinal directions (left, right, up, and down).
 *
 * Return the last day where it is possible to walk from the top to the bottom by only walking
 * on land cells.
 */

/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function(row, col, cells) {
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let left = 1;
  let right = cells.length;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canCross(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;

  function canCross(day) {
    const grid = new Array(row).fill().map(() => new Array(col).fill(0));
    for (let i = 0; i < day; i++) {
      const [r, c] = cells[i];
      grid[r - 1][c - 1] = 1;
    }

    const queue = [];
    const visited = new Array(row).fill().map(() => new Array(col).fill(false));

    for (let c = 0; c < col; c++) {
      if (grid[0][c] === 0) {
        queue.push([0, c]);
        visited[0][c] = true;
      }
    }

    while (queue.length) {
      const [r, c] = queue.shift();
      if (r === row - 1) return true;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < row && nc >= 0 && nc < col && !visited[nr][nc] && grid[nr][nc] === 0) {
          queue.push([nr, nc]);
          visited[nr][nc] = true;
        }
      }
    }
    return false;
  }
};
