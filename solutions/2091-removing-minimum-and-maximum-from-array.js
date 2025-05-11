/**
 * 2091. Removing Minimum and Maximum From Array
 * https://leetcode.com/problems/removing-minimum-and-maximum-from-array/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of distinct integers nums.
 *
 * There is an element in nums that has the lowest value and an element that has the highest
 * value. We call them the minimum and maximum respectively. Your goal is to remove both these
 * elements from the array.
 *
 * A deletion is defined as either removing an element from the front of the array or removing
 * an element from the back of the array.
 *
 * Return the minimum number of deletions it would take to remove both the minimum and maximum
 * element from the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
  const n = nums.length;
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[minIndex]) minIndex = i;
    if (nums[i] > nums[maxIndex]) maxIndex = i;
  }

  const left = Math.min(minIndex, maxIndex);
  const right = Math.max(minIndex, maxIndex);

  return Math.min(
    right + 1,
    n - left,
    left + 1 + n - right
  );
};
