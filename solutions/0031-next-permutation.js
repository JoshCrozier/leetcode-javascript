/**
 * 31. Next Permutation
 * https://leetcode.com/problems/next-permutation/
 * Difficulty: Medium
 *
 * Implement next permutation, which rearranges numbers into the
 * lexicographically next greater permutation of numbers.
 *
 * If such an arrangement is not possible, it must rearrange it
 * as the lowest possible order (i.e., sorted in ascending order).
 *
 * The replacement must be in place and use only constant extra memory.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 2;

  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }

  if (i >= 0) {
    let cursor = nums.length - 1;
    while (nums[cursor] <= nums[i]) {
      cursor--;
    }
    swap(nums, i, cursor);
  }

  reverse(nums, i + 1);
};

function reverse(nums, start) {
  let i = start;
  let j = nums.length - 1;

  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
