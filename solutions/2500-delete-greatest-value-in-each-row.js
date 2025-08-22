/**
 * 2500. Delete Greatest Value in Each Row
 * https://leetcode.com/problems/delete-greatest-value-in-each-row/
 * Difficulty: Easy
 *
 * You are given an m x n matrix grid consisting of positive integers.
 *
 * Perform the following operation until grid becomes empty:
 * - Delete the element with the greatest value from each row. If multiple such elements exist,
 *   delete any of them.
 * - Add the maximum of deleted elements to the answer.
 *
 * Note that the number of columns decreases by one after each operation.
 *
 * Return the answer after performing the operations described above.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
  for (const row of grid) {
    row.sort((a, b) => a - b);
  }

  let result = 0;
  const cols = grid[0].length;
  for (let col = cols - 1; col >= 0; col--) {
    let maxInColumn = 0;
    for (let row = 0; row < grid.length; row++) {
      maxInColumn = Math.max(maxInColumn, grid[row][col]);
    }
    result += maxInColumn;
  }

  return result;
};
