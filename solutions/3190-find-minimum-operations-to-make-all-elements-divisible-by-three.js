/**
 * 3190. Find Minimum Operations to Make All Elements Divisible by Three
 * https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/
 * Difficulty: Easy
 *
 * You are given an integer array nums. In one operation, you can add or subtract 1 from any
 * element of nums.
 *
 * Return the minimum number of operations to make all elements of nums divisible by 3.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  return nums.reduce((operations, num) => {
    const remainder = num % 3;
    return operations + Math.min(remainder, 3 - remainder);
  }, 0);
};
