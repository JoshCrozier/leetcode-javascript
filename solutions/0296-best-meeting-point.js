/**
 * 296. Best Meeting Point
 * https://leetcode.com/problems/best-meeting-point/
 * Difficulty: Hard
 *
 * Given an m x n binary grid grid where each 1 marks the home of one friend, return the minimal
 * total travel distance.
 *
 * The total travel distance is the sum of the distances between the houses of the friends and
 * the meeting point.
 *
 * The distance is calculated using Manhattan Distance, where
 * distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
  const rows = [];
  const cols = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  rows.sort((a, b) => a - b);
  cols.sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < rows.length; i++) {
    result += Math.abs(rows[i] - rows[Math.floor(rows.length / 2)]);
    result += Math.abs(cols[i] - cols[Math.floor(cols.length / 2)]);
  }
  return result;
};
