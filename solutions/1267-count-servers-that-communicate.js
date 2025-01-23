/**
 * 1267. Count Servers that Communicate
 * https://leetcode.com/problems/count-servers-that-communicate/
 * Difficulty: Medium
 *
 * You are given a map of a server center, represented as a m * n integer matrix grid,
 * where 1 means that on that cell there is a server and 0 means that it is no server.
 * Two servers are said to communicate if they are on the same row or on the same column.
 *
 * Return the number of servers that communicate with any other server.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  const rows = new Array(grid.length).fill(0);
  const columns = new Array(grid[0].length).fill(0);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        rows[i]++;
        columns[j]++;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!grid[i][j] || (rows[i] < 2 && columns[j] < 2)) {
        continue;
      }
      result++;
    }
  }

  return result;
};
