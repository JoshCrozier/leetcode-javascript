/**
 * 2352. Equal Row and Column Pairs
 * https://leetcode.com/problems/equal-row-and-column-pairs/
 * Difficulty: Medium
 *
 * Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj)
 * such that row ri and column cj are equal.
 *
 * A row and column pair is considered equal if they contain the same elements in the
 * same order (i.e., an equal array).
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  const columns = new Map();
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    const column = [];
    for (let j = 0; j < grid[i].length; j++) {
      column.push(grid[j][i]);
    }
    columns.set(column.join(), (columns.get(column.join()) ?? 0) + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    count += columns.get(grid[i].join()) ?? 0;
  }

  return count;
};
