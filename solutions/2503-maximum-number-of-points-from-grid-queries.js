/**
 * 2503. Maximum Number of Points From Grid Queries
 * https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/
 * Difficulty: Hard
 *
 * You are given an m x n integer matrix grid and an array queries of size k.
 *
 * Find an array answer of size k such that for each integer queries[i] you start in the top left
 * cell of the matrix and repeat the following process:
 * - If queries[i] is strictly greater than the value of the current cell that you are in, then
 *   you get one point if it is your first time visiting this cell, and you can move to any adjacent
 *   cell in all 4 directions: up, down, left, and right.
 * - Otherwise, you do not get any points, and you end this process.
 *
 * After the process, answer[i] is the maximum number of points you can get. Note that for each
 * query you are allowed to visit the same cell multiple times.
 *
 * Return the resulting array answer.
 */

/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function(grid, queries) {
  const rows = grid.length;
  const cols = grid[0].length;
  const result = new Array(queries.length);
  const sortedQueries = queries
    .map((value, index) => ({ value, index }))
    .sort((a, b) => a.value - b.value);
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const queue = new MinPriorityQueue(([row, col]) => grid[row][col]);
  const visited = new Set();

  queue.enqueue([0, 0]);
  visited.add('0,0');

  let queryIndex = 0;
  let points = 0;
  while (queue.size()) {
    const [row, col] = queue.dequeue();
    const currentValue = grid[row][col];
    while (queryIndex < sortedQueries.length && currentValue >= sortedQueries[queryIndex].value) {
      result[sortedQueries[queryIndex].index] = points;
      queryIndex++;
    }
    if (queryIndex === sortedQueries.length) break;
    points++;
    for (const [rowOffset, colOffset] of directions) {
      const nextRow = row + rowOffset;
      const nextCol = col + colOffset;
      const positionKey = `${nextRow},${nextCol}`;
      if (nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols
          && !visited.has(positionKey)) {
        visited.add(positionKey);
        queue.enqueue([nextRow, nextCol]);
      }
    }
  }
  while (queryIndex < sortedQueries.length) {
    result[sortedQueries[queryIndex].index] = points;
    queryIndex++;
  }

  return result;
};
