/**
 * 2183. Count Array Pairs Divisible by K
 * https://leetcode.com/problems/count-array-pairs-divisible-by-k/
 * Difficulty: Hard
 *
 * Given a 0-indexed integer array nums of length n and an integer k, return the number
 * of pairs (i, j) such that:
 * - 0 <= i < j <= n - 1 and
 * - nums[i] * nums[j] is divisible by k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
  const map = new Map();
  let pairs = 0;

  for (const num of nums) {
    const gcd1 = gcd(num, k);
    for (const [gcd2, count] of map) {
      if ((gcd1 * gcd2) % k === 0) {
        pairs += count;
      }
    }
    map.set(gcd1, (map.get(gcd1) || 0) + 1);
  }

  return pairs;
};

function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}
