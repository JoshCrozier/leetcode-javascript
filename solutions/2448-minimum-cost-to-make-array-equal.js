/**
 * 2448. Minimum Cost to Make Array Equal
 * https://leetcode.com/problems/minimum-cost-to-make-array-equal/
 * Difficulty: Hard
 *
 * You are given two 0-indexed arrays nums and cost consisting each of n positive integers.
 *
 * You can do the following operation any number of times:
 * - Increase or decrease any element of the array nums by 1.
 *
 * The cost of doing one operation on the ith element is cost[i].
 *
 * Return the minimum total cost such that all the elements of the array nums become equal.
 */

/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
  const pairs = nums.map((num, i) => [num, cost[i]]).sort((a, b) => a[0] - b[0]);
  const n = nums.length;
  const prefixSum = Array(n).fill(0);
  const prefixCost = Array(n).fill(0);

  prefixSum[0] = pairs[0][0] * pairs[0][1];
  prefixCost[0] = pairs[0][1];

  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + pairs[i][0] * pairs[i][1];
    prefixCost[i] = prefixCost[i - 1] + pairs[i][1];
  }

  let result = Infinity;
  for (let i = 0; i < n; i++) {
    const target = pairs[i][0];
    const leftCost = i > 0 ? target * prefixCost[i - 1] - prefixSum[i - 1] : 0;
    const rightCost = i < n - 1 ? prefixSum[n - 1] - prefixSum[i]
      - target * (prefixCost[n - 1] - prefixCost[i]) : 0;
    result = Math.min(result, leftCost + rightCost);
  }

  return result;
};
