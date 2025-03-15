/**
 * 798. Smallest Rotation with Highest Score
 * https://leetcode.com/problems/smallest-rotation-with-highest-score/
 * Difficulty: Hard
 *
 * You are given an array nums. You can rotate it by a non-negative integer k so that the array
 * becomes [nums[k], nums[k + 1], ... nums[nums.length - 1], nums[0], nums[1], ..., nums[k-1]].
 * Afterward, any entries that are less than or equal to their index are worth one point.
 *
 * For example, if we have nums = [2,4,1,3,0], and we rotate by k = 2, it becomes [1,3,0,2,4].
 * This is worth 3 points because 1 > 0 [no points], 3 > 1 [no points], 0 <= 2 [one point],
 * 2 <= 3 [one point], 4 <= 4 [one point].
 *
 * Return the rotation index k that corresponds to the highest score we can achieve if we rotated
 * nums by it. If there are multiple answers, return the smallest such index k.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var bestRotation = function(nums) {
  const n = nums.length;
  const changes = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const lowIndex = (i + 1) % n;
    const highIndex = (i - nums[i] + 1 + n) % n;

    changes[lowIndex]++;
    changes[highIndex]--;

    if (lowIndex > highIndex) {
      changes[0]++;
    }
  }

  let maxScore = 0;
  let maxIndex = 0;
  let currentScore = 0;

  for (let i = 0; i < n; i++) {
    currentScore += changes[i];
    if (currentScore > maxScore) {
      maxScore = currentScore;
      maxIndex = i;
    }
  }

  return maxIndex;
};
