/**
 * 918. Maximum Sum Circular Subarray
 * https://leetcode.com/problems/maximum-sum-circular-subarray/
 * Difficulty: Medium
 *
 * Given a circular integer array nums of length n, return the maximum possible sum of
 * a non-empty subarray of nums.
 *
 * A circular array means the end of the array connects to the beginning of the array.
 * Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element
 * of nums[i] is nums[(i - 1 + n) % n].
 *
 * A subarray may only include each element of the fixed buffer nums at most once.
 * Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist
 * i <= k1, k2 <= j with k1 % n == k2 % n.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let [min, max, sum] = [nums[0], nums[0], nums[0]];

  for (let i = 1, prevMin = nums[0], prevMax = nums[0]; i < nums.length; i++) {
    prevMax = Math.max(nums[i], prevMax + nums[i]);
    max = Math.max(max, prevMax);
    prevMin = Math.min(nums[i], prevMin + nums[i]);
    min = Math.min(min, prevMin);
    sum += nums[i];
  }

  return max > 0 ? Math.max(max, sum - min) : max;
};
