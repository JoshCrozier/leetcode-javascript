/**
 * 3375. Minimum Operations to Make Array Values Equal to K
 * https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/
 * Difficulty: Easy
 *
 * You are given an integer array nums and an integer k.
 *
 * An integer h is called valid if all values in the array that are strictly greater than
 * h are identical.
 *
 * For example, if nums = [10, 8, 10, 8], a valid integer is h = 9 because all nums[i] > 9
 * are equal to 10, but 5 is not a valid integer.
 *
 * You are allowed to perform the following operation on nums:
 * - Select an integer h that is valid for the current values in nums.
 * - For each index i where nums[i] > h, set nums[i] to h.
 *
 * Return the minimum number of operations required to make every element in nums equal to k.
 * If it is impossible to make all elements equal to k, return -1.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  if (nums.some(x => x < k)) return -1;

  const uniqueAbove = [...new Set(nums.filter(x => x > k))].sort((a, b) => b - a);
  if (uniqueAbove.length === 0) return 0;

  let result = 0;
  let current = uniqueAbove.slice();

  while (current.length > 0) {
    const threshold = current[0] - 1;
    current = current.filter(x => x <= threshold);
    result++;
    if (current.every(x => x === k)) break;
  }

  return result;
};
