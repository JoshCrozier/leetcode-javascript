/**
 * 1765. Map of Highest Peak
 * https://leetcode.com/problems/map-of-highest-peak/
 * Difficulty: Medium
 *
 * You are given an integer matrix isWater of size m x n that represents a map of land and
 * water cells:
 * - If isWater[i][j] == 0, cell (i, j) is a land cell.
 * - If isWater[i][j] == 1, cell (i, j) is a water cell.
 *
 * You must assign each cell a height in a way that follows these rules:
 * - The height of each cell must be non-negative.
 * - If the cell is a water cell, its height must be 0.
 * - Any two adjacent cells must have an absolute height difference of at most 1. A cell is
 * adjacent to another cell if the former is directly north, east, south, or west of the
 * latter (i.e., their sides are touching).
 *
 * Find an assignment of heights such that the maximum height in the matrix is maximized.
 *
 * Return an integer matrix height of size m x n where height[i][j] is cell (i, j)'s height.
 * If there are multiple solutions, return any of them.
 */

/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
  const map = isWater.map(row => row.map(() => 0));
  const values = isWater.map((row, i) => {
    return row.map((value, j) => value ? [i, j] : 0);
  }).flat().filter(Boolean);

  for (let value = 0; values.length > value;) {
    const [i, j] = values[value++];
    const level = map[i][j] + 1;
    [[1, 0], [-1, 0], [0, -1], [0, 1]]
      .map(direction => [i + direction[0], j + direction[1]])
      .filter(([x, y]) => 0 === isWater[x]?.[y] && !map[x][y])
      .forEach(([x, y]) => (map[x][y] = level, values.push([x, y])));
  }

  return map;
};
