/**
 * 2941. Maximum GCD-Sum of a Subarray
 * https://leetcode.com/problems/maximum-gcd-sum-of-a-subarray/
 * Difficulty: Hard
 *
 * You are given an array of integers nums and an integer k.
 *
 * The gcd-sum of an array a is calculated as follows:
 * - Let s be the sum of all the elements of a.
 * - Let g be the greatest common divisor of all the elements of a.
 * - The gcd-sum of a is equal to s * g.
 *
 * Return the maximum gcd-sum of a subarray of nums with at least k elements.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxGcdSum = function(nums, k) {
  const prefixSum = [0];
  let gcdPairs = [];
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum.push(prefixSum[prefixSum.length - 1] + nums[i]);

    const newGcdPairs = [];
    const candidates = [...gcdPairs, [i, nums[i]]];
    for (const [startIndex, currentGcd] of candidates) {
      const newGcd = gcd(currentGcd, nums[i]);
      if (newGcdPairs.length === 0 || newGcdPairs[newGcdPairs.length - 1][1] !== newGcd) {
        newGcdPairs.push([startIndex, newGcd]);
      }
    }

    gcdPairs = newGcdPairs;

    for (const [startIndex, gcdValue] of gcdPairs) {
      if (i - startIndex + 1 < k) break;
      const subarraySum = prefixSum[prefixSum.length - 1] - prefixSum[startIndex];
      result = Math.max(result, subarraySum * gcdValue);
    }
  }

  return result;

  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
};
