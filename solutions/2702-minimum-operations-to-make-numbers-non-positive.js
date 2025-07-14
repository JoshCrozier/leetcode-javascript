/**
 * 2702. Minimum Operations to Make Numbers Non-positive
 * https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/
 * Difficulty: Hard
 *
 * You are given a 0-indexed integer array nums and two integers x and y. In one operation,
 * you must choose an index i such that 0 <= i < nums.length and perform the following:
 * - Decrement nums[i] by x.
 * - Decrement values by y at all indices except the ith one.
 *
 * Return the minimum number of operations to make all the integers in nums less than or equal
 * to zero.
 */

/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minOperations = function(nums, x, y) {
  let left = 0;
  let right = Math.max(...nums);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canMakeNonPositive(nums, x, y, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;

  function canMakeNonPositive(nums, x, y, operations) {
    const n = nums.length;
    const remaining = nums.map(num => num - operations * y);

    let totalExtraNeeded = 0;
    for (let i = 0; i < n; i++) {
      if (remaining[i] > 0) {
        const extraNeeded = Math.ceil(remaining[i] / (x - y));
        totalExtraNeeded += extraNeeded;
      }
    }

    return totalExtraNeeded <= operations;
  }
};
