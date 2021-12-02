/**
 * 1470. Shuffle the Array
 * https://leetcode.com/problems/shuffle-the-array/
 * Difficulty: Easy
 *
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 *
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const shuffled = [];
  for (let i = 0; i < nums.length / 2; i++) {
    shuffled.push(nums[i], nums[i + nums.length / 2]);
  }
  return shuffled;
};
