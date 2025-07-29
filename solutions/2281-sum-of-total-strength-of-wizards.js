/**
 * 2281. Sum of Total Strength of Wizards
 * https://leetcode.com/problems/sum-of-total-strength-of-wizards/
 * Difficulty: Hard
 *
 * As the ruler of a kingdom, you have an army of wizards at your command.
 *
 * You are given a 0-indexed integer array strength, where strength[i] denotes the strength
 * of the ith wizard. For a contiguous group of wizards (i.e. the wizards' strengths form
 * a subarray of strength), the total strength is defined as the product of the following
 * two values:
 * - The strength of the weakest wizard in the group.
 * - The total of all the individual strengths of the wizards in the group.
 *
 * Return the sum of the total strengths of all contiguous groups of wizards. Since the answer
 * may be very large, return it modulo 109 + 7.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} strength
 * @return {number}
 */
var totalStrength = function(strength) {
  const n = strength.length;
  const mod = BigInt(1e9 + 7);
  const left = new Array(n).fill(-1);
  const right = new Array(n).fill(n);

  const stack = [];

  for (let i = 0; i < n; ++i) {
    while (stack.length > 0 && strength[stack[stack.length - 1]] >= strength[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      left[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }

  stack.length = 0;

  for (let i = n - 1; i >= 0; --i) {
    while (stack.length > 0 && strength[stack[stack.length - 1]] > strength[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      right[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }

  const prefixSum = new Array(n + 1).fill(0n);
  for (let i = 0; i < n; ++i) {
    prefixSum[i + 1] = (prefixSum[i] + BigInt(strength[i])) % mod;
  }

  const prefixSumOfPrefixSum = new Array(n + 2).fill(0n);
  for (let i = 0; i < n + 1; ++i) {
    prefixSumOfPrefixSum[i + 1] = (prefixSumOfPrefixSum[i] + prefixSum[i]) % mod;
  }

  let result = 0n;
  for (let i = 0; i < n; ++i) {
    const value = BigInt(strength[i]);
    const l = left[i] + 1;
    const r = right[i] - 1;
    const leftSum = (prefixSumOfPrefixSum[i + 1] - prefixSumOfPrefixSum[l] + mod) % mod;
    const rightSum = (prefixSumOfPrefixSum[r + 2] - prefixSumOfPrefixSum[i + 1] + mod) % mod;
    const leftCount = BigInt(i - l + 1);
    const rightCount = BigInt(r - i + 1);
    const leftPart = (rightSum * leftCount) % mod;
    const rightPart = (leftSum * rightCount) % mod;
    const contribution = (value * ((leftPart - rightPart + mod) % mod)) % mod;

    result = (result + contribution) % mod;
  }

  return Number(result);
};
