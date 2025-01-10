/**
 * 912. Sort an Array
 * https://leetcode.com/problems/sort-an-array/
 * Difficulty: Medium
 *
 * Given an array of integers nums, sort the array in ascending order and return it.
 *
 * You must solve the problem without using any built-in functions in O(nlog(n)) time
 * complexity and with the smallest space complexity possible.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const count = new Array(max - min + 1).fill(0);

  nums.forEach(n => count[n - min]++);

  for (let i = 0, j = 0; i < count.length; i++) {
    while (count[i]-- > 0) {
      nums[j++] = i + min;
    }
  }

  return nums;
};
