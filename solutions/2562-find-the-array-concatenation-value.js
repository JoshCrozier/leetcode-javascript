/**
 * 2562. Find the Array Concatenation Value
 * https://leetcode.com/problems/find-the-array-concatenation-value/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums.
 *
 * The concatenation of two numbers is the number formed by concatenating their numerals.
 * - For example, the concatenation of 15, 49 is 1549.
 *
 * The concatenation value of nums is initially equal to 0. Perform this operation until nums
 * becomes empty:
 * - If nums has a size greater than one, add the value of the concatenation of the first and
 *   the last element to the concatenation value of nums, and remove those two elements from
 *   nums. For example, if the nums was [1, 2, 4, 5, 6], add 16 to the concatenation value.
 * - If only one element exists in nums, add its value to the concatenation value of nums,
 *   then remove it.
 *
 * Return the concatenation value of nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
  let result = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (left === right) {
      result += nums[left];
    } else {
      result += Number(`${nums[left]}${nums[right]}`);
    }
    left++;
    right--;
  }

  return result;
};
