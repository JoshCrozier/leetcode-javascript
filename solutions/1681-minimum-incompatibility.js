/**
 * 1681. Minimum Incompatibility
 * https://leetcode.com/problems/minimum-incompatibility/
 * Difficulty: Hard
 *
 * You are given an integer array nums and an integer k. You are asked to distribute this array
 * into k subsets of equal size such that there are no two equal elements in the same subset.
 *
 * A subset's incompatibility is the difference between the maximum and minimum elements in that
 * array.
 *
 * Return the minimum possible sum of incompatibilities of the k subsets after distributing the
 * array optimally, or return -1 if it is not possible.
 *
 * A subset is a group integers that appear in the array with no particular order.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumIncompatibility = function(nums, k) {
  const n = nums.length;
  const subsetSize = n / k;
  const freq = new Array(n + 1).fill(0);
  for (const num of nums) {
    freq[num]++;
    if (freq[num] > k) return -1;
  }

  nums.sort((a, b) => a - b);
  const subsetValues = new Map();

  computeSubsets(0, 0, 0, 0, 0, []);

  const dp = new Array(1 << n).fill(Infinity);
  dp[0] = 0;

  for (let mask = 0; mask < (1 << n); mask++) {
    if (dp[mask] === Infinity) continue;
    for (const [subsetMask, value] of subsetValues) {
      if ((mask & subsetMask) === 0) {
        const newMask = mask | subsetMask;
        dp[newMask] = Math.min(dp[newMask], dp[mask] + value);
      }
    }
  }

  return dp[(1 << n) - 1] === Infinity ? -1 : dp[(1 << n) - 1];

  function computeSubsets(mask, index, count, minVal, maxVal, selected) {
    if (count === subsetSize) {
      subsetValues.set(mask, maxVal - minVal);
      return;
    }
    if (index >= n || n - index < subsetSize - count) return;

    computeSubsets(mask, index + 1, count, minVal, maxVal, selected);
    if (!selected.includes(nums[index])) {
      computeSubsets(mask | (1 << index), index + 1, count + 1,
        count === 0 ? nums[index] : minVal, nums[index], [...selected, nums[index]]);
    }
  }
};
