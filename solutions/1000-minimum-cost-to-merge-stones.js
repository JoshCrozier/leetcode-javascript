/**
 * 1000. Minimum Cost to Merge Stones
 * https://leetcode.com/problems/minimum-cost-to-merge-stones/
 * Difficulty: Hard
 *
 * There are n piles of stones arranged in a row. The ith pile has stones[i] stones.
 *
 * A move consists of merging exactly k consecutive piles into one pile, and the cost of
 * this move is equal to the total number of stones in these k piles.
 *
 * Return the minimum cost to merge all piles of stones into one pile. If it is impossible,
 * return -1.
 */

/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function(stones, k) {
  const n = stones.length;
  if ((n - 1) % (k - 1) !== 0) return -1;

  const prefixSums = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSums[i + 1] = prefixSums[i] + stones[i];
  }

  const dp = new Array(n).fill().map(() => new Array(n).fill(0));

  for (let len = k; len <= n; len++) {
    for (let start = 0; start + len <= n; start++) {
      const end = start + len - 1;
      dp[start][end] = Infinity;

      for (let mid = start; mid < end; mid += k - 1) {
        dp[start][end] = Math.min(
          dp[start][end],
          dp[start][mid] + dp[mid + 1][end]
        );
      }

      if ((len - 1) % (k - 1) === 0) {
        dp[start][end] += prefixSums[end + 1] - prefixSums[start];
      }
    }
  }

  return dp[0][n - 1];
};
