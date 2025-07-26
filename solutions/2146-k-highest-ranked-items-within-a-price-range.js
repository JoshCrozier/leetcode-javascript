/**
 * 2146. K Highest Ranked Items Within a Price Range
 * https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/
 * Difficulty: Medium
 *
 * You are given a 0-indexed 2D integer array grid of size m x n that represents a map of the
 * items in a shop. The integers in the grid represent the following:
 * - 0 represents a wall that you cannot pass through.
 * - 1 represents an empty cell that you can freely move to and from.
 *
 * All other positive integers represent the price of an item in that cell. You may also freely
 * move to and from these item cells.
 *
 * It takes 1 step to travel between adjacent grid cells.
 *
 * You are also given integer arrays pricing and start where pricing = [low, high] and
 * start = [row, col] indicates that you start at the position (row, col) and are interested
 * only in items with a price in the range of [low, high] (inclusive). You are further given
 * an integer k.
 *
 * You are interested in the positions of the k highest-ranked items whose prices are within
 * the given price range. The rank is determined by the first of these criteria that is different:
 * 1. Distance, defined as the length of the shortest path from the start (shorter distance has
 *    a higher rank).
 * 2. Price (lower price has a higher rank, but it must be in the price range).
 * 3. The row number (smaller row number has a higher rank).
 * 4. The column number (smaller column number has a higher rank).
 *
 * Return the k highest-ranked items within the price range sorted by their rank (highest to
 * lowest). If there are fewer than k reachable items within the price range, return all of them.
 */

/**
 * @param {number[][]} grid
 * @param {number[]} pricing
 * @param {number[]} start
 * @param {number} k
 * @return {number[][]}
 */
var highestRankedKItems = function(grid, pricing, start, k) {
  const [rows, cols] = [grid.length, grid[0].length];
  const [low, high] = pricing;
  const [startRow, startCol] = start;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const queue = [[startRow, startCol, 0]];
  const visited = new Set();
  visited.add(`${startRow},${startCol}`);
  const validItems = [];

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();
    const price = grid[row][col];

    if (price >= low && price <= high) {
      validItems.push([distance, price, row, col]);
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      const key = `${newRow},${newCol}`;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols
          && grid[newRow][newCol] > 0 && !visited.has(key)) {
        visited.add(key);
        queue.push([newRow, newCol, distance + 1]);
      }
    }
  }

  validItems.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    if (a[1] !== b[1]) return a[1] - b[1];
    if (a[2] !== b[2]) return a[2] - b[2];
    return a[3] - b[3];
  });

  return validItems.slice(0, k).map(item => [item[2], item[3]]);
};
