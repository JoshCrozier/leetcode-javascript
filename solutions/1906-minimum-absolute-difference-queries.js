/**
 * 1906. Minimum Absolute Difference Queries
 * https://leetcode.com/problems/minimum-absolute-difference-queries/
 * Difficulty: Medium
 *
 * The minimum absolute difference of an array a is defined as the minimum value of |a[i] - a[j]|,
 * where 0 <= i < j < a.length and a[i] != a[j]. If all elements of a are the same, the minimum
 * absolute difference is -1.
 * - For example, the minimum absolute difference of the array [5,2,3,7,2] is |2 - 3| = 1. Note
 *   that it is not 0 because a[i] and a[j] must be different.
 *
 * You are given an integer array nums and the array queries where queries[i] = [li, ri]. For each
 * query i, compute the minimum absolute difference of the subarray nums[li...ri] containing the
 * elements of nums between the 0-based indices li and ri (inclusive).
 *
 * Return an array ans where ans[i] is the answer to the ith query.
 *
 * A subarray is a contiguous sequence of elements in an array.
 *
 * The value of |x| is defined as:
 * - x if x >= 0.
 * - -x if x < 0.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDifference = function(nums, queries) {
  const maxValue = 100;
  const prefixCounts = new Array(nums.length + 1).fill().map(() => new Array(maxValue + 1).fill(0));

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= maxValue; j++) {
      prefixCounts[i + 1][j] = prefixCounts[i][j] + (nums[i] === j ? 1 : 0);
    }
  }

  return queries.map(([start, end]) => getMinDiff(start, end));

  function getMinDiff(start, end) {
    let minDiff = Infinity;
    let prevValue = -1;

    for (let j = 1; j <= maxValue; j++) {
      if (prefixCounts[end + 1][j] - prefixCounts[start][j] > 0) {
        if (prevValue !== -1) {
          minDiff = Math.min(minDiff, j - prevValue);
        }
        prevValue = j;
      }
    }

    return minDiff === Infinity ? -1 : minDiff;
  }
};
