/**
 * 2909. Minimum Sum of Mountain Triplets II
 * https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array nums of integers.
 *
 * A triplet of indices (i, j, k) is a mountain if:
 * - i < j < k
 * - nums[i] < nums[j] and nums[k] < nums[j]
 *
 * Return the minimum possible sum of a mountain triplet of nums. If no such triplet
 * exists, return -1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
  const n = nums.length;
  const leftMin = new Array(n).fill(Infinity);
  const rightMin = new Array(n).fill(Infinity);

  leftMin[0] = nums[0];
  for (let i = 1; i < n; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i]);
  }

  rightMin[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i]);
  }

  let minSum = Infinity;
  for (let j = 1; j < n - 1; j++) {
    if (nums[j] > leftMin[j - 1] && nums[j] > rightMin[j + 1]) {
      minSum = Math.min(minSum, leftMin[j - 1] + nums[j] + rightMin[j + 1]);
    }
  }

  return minSum === Infinity ? -1 : minSum;
};
