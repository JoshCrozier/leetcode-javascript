/**
 * 2965. Find Missing and Repeated Values
 * https://leetcode.com/problems/find-missing-and-repeated-values/
 * Difficulty: Easy
 *
 * You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2].
 * Each integer appears exactly once except a which appears twice and b which is missing. The task
 * is to find the repeating and missing numbers a and b.
 *
 * Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  const sum = grid.flat().reduce((a, b) => a + b, 0);
  const expectedSum = (grid.length * grid.length * (grid.length * grid.length + 1)) / 2;
  const repeated = sum - [...new Set(grid.flat())].reduce((a, b) => a + b, 0);
  return [repeated, expectedSum - sum + repeated];
};
