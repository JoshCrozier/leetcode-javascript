/**
 * 3284. Sum of Consecutive Subarrays
 * https://leetcode.com/problems/sum-of-consecutive-subarrays/
 * Difficulty: Medium
 *
 * We call an array arr of length n consecutive if one of the following holds:
 * - arr[i] - arr[i - 1] == 1 for all 1 <= i < n.
 * - arr[i] - arr[i - 1] == -1 for all 1 <= i < n.
 *
 * The value of an array is the sum of its elements.
 *
 * For example, [3, 4, 5] is a consecutive array of value 12 and [9, 8] is another of
 * value 17. While [3, 4, 3] and [8, 6] are not consecutive.
 *
 * Given an array of integers nums, return the sum of the values of all consecutive subarrays.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 *
 * Note that an array of length 1 is also considered consecutive.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var getSum = function(nums) {
  const MOD = 1e9 + 7;
  let result = nums[0];
  let currentContribution = nums[0];
  let leftBoundary = 0;
  let previousDifference = 0;

  for (let rightIndex = 1; rightIndex < nums.length; rightIndex++) {
    const currentDifference = nums[rightIndex] - nums[rightIndex - 1];
    if (Math.abs(currentDifference) !== 1) {
      previousDifference = 0;
      leftBoundary = rightIndex;
      currentContribution = 0;
    } else if (previousDifference !== currentDifference) {
      currentContribution = nums[rightIndex - 1];
      leftBoundary = rightIndex - 1;
      previousDifference = currentDifference;
    }

    currentContribution += nums[rightIndex] * (rightIndex - leftBoundary + 1);
    result = (result + currentContribution) % MOD;
  }

  return result;
};
