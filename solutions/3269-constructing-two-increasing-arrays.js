/**
 * 3269. Constructing Two Increasing Arrays
 * https://leetcode.com/problems/constructing-two-increasing-arrays/
 * Difficulty: Hard
 *
 * Given 2 integer arrays nums1 and nums2 consisting only of 0 and 1, your task is to calculate
 * the minimum possible largest number in arrays nums1 and nums2, after doing the following.
 *
 * Replace every 0 with an even positive integer and every 1 with an odd positive integer.
 * After replacement, both arrays should be increasing and each integer should be used at most once.
 *
 * Return the minimum possible largest number after applying the changes.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minLargest = function(nums1, nums2) {
  const n1 = nums1.length;
  const n2 = nums2.length;
  const dp = new Array(n1 + 1).fill().map(() => new Array(n2 + 1).fill(-Infinity));

  dp[0][0] = 0;

  for (let i = 0; i < n1; i++) {
    dp[i + 1][0] = getNextValue(dp[i][0], nums1[i]);
  }
  for (let j = 0; j < n2; j++) {
    dp[0][j + 1] = getNextValue(dp[0][j], nums2[j]);
  }
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      dp[i + 1][j + 1] = Math.min(
        getNextValue(dp[i][j + 1], nums1[i]),
        getNextValue(dp[i + 1][j], nums2[j])
      );
    }
  }

  return dp[n1][n2];

  function getNextValue(currentValue, targetParity) {
    const nextValue = currentValue + 1;
    return nextValue % 2 === targetParity % 2 ? nextValue : nextValue + 1;
  }
};
