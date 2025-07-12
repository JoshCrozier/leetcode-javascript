/**
 * 2422. Merge Operations to Turn Array Into a Palindrome
 * https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/
 * Difficulty: Medium
 *
 * You are given an array nums consisting of positive integers.
 *
 * You can perform the following operation on the array any number of times:
 * - Choose any two adjacent elements and replace them with their sum.
 *   - For example, if nums = [1,2,3,1], you can apply one operation to make it [1,5,1].
 *
 * Return the minimum number of operations needed to turn the array into a palindrome.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let leftSum = nums[left];
  let rightSum = nums[right];
  let result = 0;

  while (left < right) {
    if (leftSum === rightSum) {
      left++;
      right--;
      if (left <= right) {
        leftSum = nums[left];
        rightSum = nums[right];
      }
    } else if (leftSum < rightSum) {
      left++;
      leftSum += nums[left];
      result++;
    } else {
      right--;
      rightSum += nums[right];
      result++;
    }
  }

  return result;
};
