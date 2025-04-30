/**
 * 1787. Make the XOR of All Segments Equal to Zero
 * https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/
 * Difficulty: Hard
 *
 * You are given an array nums and an integer k. The XOR of a segment [left, right] where
 * left <= right is the XOR of all the elements with indices between left and right,
 * inclusive: nums[left] XOR nums[left+1] XOR ... XOR nums[right].
 *
 * Return the minimum number of elements to change in the array such that the XOR of all
 * segments of size k is equal to zero.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function(nums, k) {
  const n = nums.length;
  const maxVal = 1 << 10;
  const groups = new Array(k).fill().map(() => new Map());

  for (let i = 0; i < n; i++) {
    groups[i % k].set(nums[i], (groups[i % k].get(nums[i]) || 0) + 1);
  }

  const dp = new Array(maxVal).fill(n);
  dp[0] = 0;

  for (let pos = 0; pos < k; pos++) {
    const prevDp = [...dp];
    dp.fill(n);
    const groupSize = Math.floor(n / k) + (pos < n % k ? 1 : 0);
    const minPrev = Math.min(...prevDp);

    for (let xor = 0; xor < maxVal; xor++) {
      if (prevDp[xor] === n) continue;
      for (const [val, count] of groups[pos]) {
        const newXor = xor ^ val;
        dp[newXor] = Math.min(dp[newXor], prevDp[xor] + groupSize - count);
      }
    }

    for (let xor = 0; xor < maxVal; xor++) {
      dp[xor] = Math.min(dp[xor], minPrev + groupSize);
    }
  }

  return dp[0];
};
