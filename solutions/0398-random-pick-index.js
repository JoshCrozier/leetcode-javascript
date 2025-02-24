/**
 * 398. Random Pick Index
 * https://leetcode.com/problems/random-pick-index/
 * Difficulty: Medium
 *
 * Given an integer array nums with possible duplicates, randomly output the index of a given
 * target number. You can assume that the given target number must exist in the array.
 *
 * Implement the Solution class:
 * - Solution(int[] nums) Initializes the object with the array nums.
 * - int pick(int target) Picks a random index i from nums where nums[i] == target. If there
 *   are multiple valid i's, then each index should have an equal probability of returning.
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!this.map.has(nums[i])) {
      this.map.set(nums[i], []);
    }
    this.map.get(nums[i]).push(i);
  }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  const result = this.map.get(target);
  return result[Math.floor(Math.random() * result.length)];
};
