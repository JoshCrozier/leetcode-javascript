/**
 * 1730. Shortest Path to Get Food
 * https://leetcode.com/problems/shortest-path-to-get-food/
 * Difficulty: Medium
 *
 * You are starving and you want to eat food as quickly as possible. You want to find the
 * shortest path to arrive at any food cell.
 *
 * You are given an m x n character matrix, grid, of these different types of cells:
 * - '*' is your location. There is exactly one '*' cell.
 * - '#' is a food cell. There may be multiple food cells.
 * - 'O' is free space, and you can travel through these cells.
 * - 'X' is an obstacle, and you cannot travel through these cells.
 *
 * You can travel to any adjacent cell north, east, south, or west of your current location
 * if there is not an obstacle.
 *
 * Return the length of the shortest path for you to reach any food cell. If there is no
 * path for you to reach food, return -1.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let startRow = 0;
  let startCol = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '*') {
        startRow = i;
        startCol = j;
        break;
      }
    }
  }

  const queue = [[startRow, startCol, 0]];
  const visited = new Set();
  visited.add(`${startRow},${startCol}`);

  while (queue.length > 0) {
    const [currentRow, currentCol, steps] = queue.shift();

    if (grid[currentRow][currentCol] === '#') {
      return steps;
    }

    for (const [deltaRow, deltaCol] of directions) {
      const newRow = currentRow + deltaRow;
      const newCol = currentCol + deltaCol;
      const key = `${newRow},${newCol}`;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !visited.has(key)
         && grid[newRow][newCol] !== 'X') {
        visited.add(key);
        queue.push([newRow, newCol, steps + 1]);
      }
    }
  }

  return -1;
};
