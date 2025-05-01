/**
 * 1802. Maximum Value at a Given Index in a Bounded Array
 * https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/
 * Difficulty: Medium
 *
 * You are given three positive integers: n, index, and maxSum. You want to construct an array
 * nums (0-indexed) that satisfies the following conditions:
 * - nums.length == n
 * - nums[i] is a positive integer where 0 <= i < n.
 * - abs(nums[i] - nums[i+1]) <= 1 where 0 <= i < n-1.
 * - The sum of all the elements of nums does not exceed maxSum.
 * - nums[index] is maximized.
 *
 * Return nums[index] of the constructed array.
 *
 * Note that abs(x) equals x if x >= 0, and -x otherwise.
 */

/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
  function minSumRequired(peak) {
    const leftCount = Math.min(index, peak - 1);
    const rightCount = Math.min(n - index - 1, peak - 1);
    let sum = peak;
    sum += (peak - 1 + peak - leftCount) * leftCount / 2;
    sum += (peak - 1 + peak - rightCount) * rightCount / 2;
    sum += (index - leftCount) + (n - index - 1 - rightCount);
    return sum;
  }

  let low = 1;
  let high = maxSum;
  let result = 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (minSumRequired(mid) <= maxSum) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
};
