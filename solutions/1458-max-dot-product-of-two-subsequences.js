/**
 * 1458. Max Dot Product of Two Subsequences
 * https://leetcode.com/problems/max-dot-product-of-two-subsequences/
 * Difficulty: Hard
 *
 * Given two arrays nums1 and nums2.
 *
 * Return the maximum dot product between non-empty subsequences of nums1 and nums2 with the
 * same length.
 *
 * A subsequence of a array is a new array which is formed from the original array by deleting
 * some (can be none) of the characters without disturbing the relative positions of the remaining
 * characters. (ie, [2,3,5] is a subsequence of [1,2,3,4,5] while [1,5,3] is not).
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(-Infinity));

  let result = -Infinity;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      result = Math.max(result, computeMax(i, j));
    }
  }

  return result;

  function computeMax(i, j) {
    if (i === 0 || j === 0) return -Infinity;
    if (dp[i][j] !== -Infinity) return dp[i][j];

    dp[i][j] = nums1[i - 1] * nums2[j - 1];
    dp[i][j] = Math.max(
      dp[i][j],
      dp[i][j] + computeMax(i - 1, j - 1),
      computeMax(i - 1, j),
      computeMax(i, j - 1)
    );

    return dp[i][j];
  }
};
