/**
 * 2826. Sorting Three Groups
 * https://leetcode.com/problems/sorting-three-groups/
 * Difficulty: Medium
 *
 * You are given an integer array nums. Each element in nums is 1, 2 or 3. In each operation,
 * you can remove an element from nums. Return the minimum number of operations to make nums
 * non-decreasing.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(4).fill(Infinity));
  dp[0][0] = 0;

  for (let i = 0; i < n; i++) {
    for (let prev = 0; prev <= 3; prev++) {
      for (let curr = 1; curr <= 3; curr++) {
        if (curr >= prev) {
          dp[i + 1][curr] = Math.min(
            dp[i + 1][curr],
            dp[i][prev] + (nums[i] === curr ? 0 : 1)
          );
        }
      }
    }
  }

  return Math.min(...dp[n].slice(1));
};
