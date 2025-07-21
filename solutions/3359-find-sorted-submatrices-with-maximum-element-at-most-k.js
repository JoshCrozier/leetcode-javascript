/**
 * 3359. Find Sorted Submatrices With Maximum Element at Most K
 * https://leetcode.com/problems/find-sorted-submatrices-with-maximum-element-at-most-k/
 * Difficulty: Hard
 *
 * You are given a 2D matrix grid of size m x n. You are also given a non-negative integer k.
 *
 * Return the number of submatrices of grid that satisfy the following conditions:
 * - The maximum element in the submatrix less than or equal to k.
 * - Each row in the submatrix is sorted in non-increasing order.
 *
 * A submatrix (x1, y1, x2, y2) is a matrix that forms by choosing all cells grid[x][y]
 * where x1 <= x <= x2 and y1 <= y <= y2.
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function(grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const groups = new Array(cols).fill().map(() => []);
  const sums = new Array(cols).fill(0);
  let result = 0;

  for (let row = 0; row < rows; row++) {
    const rowLengths = new Array(cols).fill(0);

    for (let col = 0; col < cols; col++) {
      if (grid[row][col] <= k) {
        rowLengths[col] = (col > 0 && grid[row][col - 1] >= grid[row][col])
          ? rowLengths[col - 1] + 1
          : 1;
        let lengthCount = 1;
        const stack = groups[col];

        while (stack.length > 0 && stack[stack.length - 1][0] > rowLengths[col]) {
          const [stackLength, stackCount] = stack.pop();
          lengthCount += stackCount;
          sums[col] -= stackLength * stackCount;
        }

        if (stack.length === 0 || stack[stack.length - 1][0] !== rowLengths[col]) {
          stack.push([rowLengths[col], 0]);
        }

        stack[stack.length - 1][1] += lengthCount;
        sums[col] += rowLengths[col] * lengthCount;
        result += sums[col];
      } else {
        groups[col].length = 0;
        sums[col] = 0;
      }
    }
  }

  return result;
};
