/**
 * 2862. Maximum Element-Sum of a Complete Subset of Indices
 * https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/
 * Difficulty: Hard
 *
 * You are given a 1-indexed array nums. Your task is to select a complete subset from nums where
 * every pair of selected indices multiplied is a perfect square,. i. e. if you select ai and aj,
 * i * j must be a perfect square.
 *
 * Return the sum of the complete subset with the maximum sum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
  const n = nums.length;
  const map = new Map();

  for (let i = 1; i <= n; i++) {
    let factors = 1;
    let num = i;

    for (let p = 2; p * p <= num; p++) {
      let count = 0;
      while (num % p === 0) {
        count++;
        num /= p;
      }
      if (count % 2 === 1) factors *= p;
    }
    if (num > 1) factors *= num;

    if (!map.has(factors)) map.set(factors, []);
    map.get(factors).push(nums[i - 1]);
  }

  let result = 0;
  for (const group of map.values()) {
    const sum = group.reduce((a, b) => a + b, 0);
    result = Math.max(result, sum);
  }

  return result;
};
