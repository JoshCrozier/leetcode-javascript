/**
 * 1162. As Far from Land as Possible
 * https://leetcode.com/problems/as-far-from-land-as-possible/
 * Difficulty: Medium
 *
 * Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents
 * land, find a water cell such that its distance to the nearest land cell is maximized, and return
 * the distance. If no land or water exists in the grid, return -1.
 *
 * The distance used in this problem is the Manhattan distance: the distance between two cells
 * (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  const size = grid.length;
  const queue = [];
  let waterCount = 0;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (grid[row][col] === 1) {
        queue.push([row, col]);
      } else {
        waterCount++;
      }
    }
  }

  if (waterCount === 0 || queue.length === 0) return -1;

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let distance = -1;

  while (queue.length > 0) {
    distance++;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const [currentRow, currentCol] = queue.shift();
      for (const [deltaRow, deltaCol] of directions) {
        const newRow = currentRow + deltaRow;
        const newCol = currentCol + deltaCol;
        if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size
            && grid[newRow][newCol] === 0) {
          grid[newRow][newCol] = 1;
          queue.push([newRow, newCol]);
        }
      }
    }
  }

  return distance === 0 ? -1 : distance;
};
