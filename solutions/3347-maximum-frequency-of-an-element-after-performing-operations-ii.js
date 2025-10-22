/**
 * 3347. Maximum Frequency of an Element After Performing Operations II
 * https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii
 * Difficulty: Hard
 *
 * You are given an integer array nums and two integers k and numOperations.
 *
 * You must perform an operation numOperations times on nums, where in each operation you:
 * - Select an index i that was not selected in any previous operations.
 * - Add an integer in the range [-k, k] to nums[i].
 *
 * Return the maximum possible frequency of any element in nums after performing the operations.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function(nums, k, numOperations) {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  const count = new Map();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  let result = 0;
  let left = 0;
  let right = 0;
  for (let mid = 0; mid < n; mid++) {
    while (nums[mid] - nums[left] > k) {
      left++;
    }

    while (right < n - 1 && nums[right + 1] - nums[mid] <= k) {
      right++;
    }

    const total = right - left + 1;
    result = Math.max(
      result,
      Math.min(total - count.get(nums[mid]), numOperations) + count.get(nums[mid])
    );
  }

  left = 0;
  for (right = 0; right < n; right++) {
    let mid = Math.floor((nums[left] + nums[right]) / 2);

    while (mid - nums[left] > k || nums[right] - mid > k) {
      left++;
      mid = Math.floor((nums[left] + nums[right]) / 2);
    }

    result = Math.max(result, Math.min(right - left + 1, numOperations));
  }

  return result;
};
