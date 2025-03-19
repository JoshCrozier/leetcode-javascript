/**
 * 3191. Minimum Operations to Make Binary Array Elements Equal to One I
 * https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/
 * Difficulty: Medium
 *
 * You are given a binary array nums.
 *
 * You can do the following operation on the array any number of times (possibly zero):
 * - Choose any 3 consecutive elements from the array and flip all of them.
 *
 * Flipping an element means changing its value from 0 to 1, and from 1 to 0.
 *
 * Return the minimum number of operations required to make all elements in nums equal to 1.
 * If it is impossible, return -1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const result = [...nums];
  let operations = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (result[i] === 0) {
      result[i] ^= 1;
      result[i + 1] ^= 1;
      result[i + 2] ^= 1;
      operations++;
    }
  }

  return result.every(num => num === 1) ? operations : -1;
};
