/**
 * 3496. Maximize Score After Pair Deletions
 * https://leetcode.com/problems/maximize-score-after-pair-deletions/
 * Difficulty: Medium
 *
 * You are given an array of integers nums. You must repeatedly perform one of the following
 * operations while the array has more than two elements:
 * - Remove the first two elements.
 * - Remove the last two elements.
 * - Remove the first and last element.
 *
 * For each operation, add the sum of the removed elements to your total score.
 *
 * Return the maximum possible score you can achieve.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  const n = nums.length;
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  if (n % 2 === 1) {
    return totalSum - Math.min(...nums);
  } else {
    let minPairSum = Infinity;
    for (let i = 0; i < n - 1; i++) {
      minPairSum = Math.min(minPairSum, nums[i] + nums[i + 1]);
    }
    return totalSum - minPairSum;
  }
};
