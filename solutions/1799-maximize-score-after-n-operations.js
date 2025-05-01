/**
 * 1799. Maximize Score After N Operations
 * https://leetcode.com/problems/maximize-score-after-n-operations/
 * Difficulty: Hard
 *
 * You are given nums, an array of positive integers of size 2 * n. You must perform n operations
 * on this array.
 *
 * In the ith operation (1-indexed), you will:
 * - Choose two elements, x and y.
 * - Receive a score of i * gcd(x, y).
 * - Remove x and y from nums.
 *
 * Return the maximum score you can receive after performing n operations.
 *
 * The function gcd(x, y) is the greatest common divisor of x and y.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  const n = nums.length;
  const pairsGcd = Array(n).fill().map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      pairsGcd[i][j] = gcd(nums[i], nums[j]);
    }
  }

  return solve(1, 0, {}, pairsGcd);

  function gcd(a, b) {
    while (b) {
      a %= b;
      [a, b] = [b, a];
    }
    return a;
  }

  function solve(operations, mask, memo, pairsGcd) {
    if (operations > nums.length / 2) return 0;
    if (memo[mask] !== undefined) return memo[mask];

    let maxScore = 0;
    for (let i = 0; i < nums.length; i++) {
      if (mask & (1 << i)) continue;
      for (let j = i + 1; j < nums.length; j++) {
        if (mask & (1 << j)) continue;
        const newMask = mask | (1 << i) | (1 << j);
        const score = operations * pairsGcd[i][j] + solve(operations + 1, newMask, memo, pairsGcd);
        maxScore = Math.max(maxScore, score);
      }
    }

    return memo[mask] = maxScore;
  }
};
