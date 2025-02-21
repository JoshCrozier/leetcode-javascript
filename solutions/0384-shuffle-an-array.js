/**
 * 384. Shuffle an Array
 * https://leetcode.com/problems/shuffle-an-array/
 * Difficulty: Medium
 *
 * Given an integer array nums, design an algorithm to randomly shuffle the array.
 * All permutations of the array should be equally likely as a result of the shuffling.
 *
 * Implement the Solution class:
 * - Solution(int[] nums) Initializes the object with the integer array nums.
 * - int[] reset() Resets the array to its original configuration and returns it.
 * - int[] shuffle() Returns a random shuffling of the array.
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.original = [...nums];
  this.result = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.result = [...this.original];
  return this.result;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  for (let i = this.result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this.result[i], this.result[j]] = [this.result[j], this.result[i]];
  }
  return this.result;
};
