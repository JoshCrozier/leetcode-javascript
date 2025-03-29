/**
 * 2818. Apply Operations to Maximize Score
 * https://leetcode.com/problems/apply-operations-to-maximize-score/
 * Difficulty: Hard
 *
 * You are given an array nums of n positive integers and an integer k.
 *
 * Initially, you start with a score of 1. You have to maximize your score by applying the following
 * operation at most k times:
 * - Choose any non-empty subarray nums[l, ..., r] that you haven't chosen previously.
 * - Choose an element x of nums[l, ..., r] with the highest prime score. If multiple such elements
 *   exist, choose the one with the smallest index.
 * - Multiply your score by x.
 *
 * Here, nums[l, ..., r] denotes the subarray of nums starting at index l and ending at the index
 * r, both ends being inclusive.
 *
 * The prime score of an integer x is equal to the number of distinct prime factors of x. For
 * example, the prime score of 300 is 3 since 300 = 2 * 2 * 3 * 5 * 5.
 *
 * Return the maximum possible score after applying at most k operations.
 *
 * Since the answer may be large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
  const MOD = 1000000007n;
  const MAX = 100000;
  const powerCache = {};

  const primeScores = new Array(MAX + 1).fill(0);
  for (let prime = 2; prime <= MAX; prime++) {
    if (primeScores[prime] > 0) continue;
    for (let multiple = prime; multiple <= MAX; multiple += prime) {
      primeScores[multiple]++;
    }
  }

  const elements = nums.map(num => [num, primeScores[num], 1]);

  const stack = [-1];
  const n = elements.length;

  for (let i = 0; i <= n; i++) {
    while (
      stack.length > 1 && (i === n || elements[stack[stack.length - 1]][1] < elements[i][1])
    ) {
      const current = stack.pop();
      elements[current][2] = (i - current) * (current - stack[stack.length - 1]);
    }

    stack.push(i);
  }

  elements.sort((a, b) => b[0] - a[0]);

  let result = 1n;
  let remainingOps = k;

  for (let i = 0; remainingOps > 0; i++) {
    const usedOps = Math.min(remainingOps, elements[i][2]);
    remainingOps -= usedOps;

    const cacheKey = `${elements[i][0]},${usedOps}`;
    let power;

    if (cacheKey in powerCache) {
      power = powerCache[cacheKey];
    } else {
      let base = BigInt(elements[i][0]);
      let exp = usedOps;
      power = 1n;

      while (exp > 0) {
        if (exp & 1) {
          power = (power * base) % MOD;
        }
        exp >>= 1;
        base = (base * base) % MOD;
      }

      powerCache[cacheKey] = power;
    }

    result = (result * power) % MOD;
  }

  return Number(result);
};
