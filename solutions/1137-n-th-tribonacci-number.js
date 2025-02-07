/**
 * 1137. N-th Tribonacci Number
 * https://leetcode.com/problems/n-th-tribonacci-number/
 * Difficulty: Easy
 *
 * The Tribonacci sequence Tn is defined as follows:
 *
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 *
 * Given n, return the value of Tn.
 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const nums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    nums.push(nums[i - 3] + nums[i - 2] + nums[i - 1]);
  }

  return nums[n];
};
