/**
 * 2198. Number of Single Divisor Triplets
 * https://leetcode.com/problems/number-of-single-divisor-triplets/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of positive integers nums. A triplet of three distinct
 * indices (i, j, k) is called a single divisor triplet of nums if nums[i] + nums[j] + nums[k]
 * is divisible by exactly one of nums[i], nums[j], or nums[k].
 *
 * Return the number of single divisor triplets of nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleDivisorTriplet = function(nums) {
  let result = 0;
  const count = new Array(101).fill(0);

  for (const num of nums) {
    count[num]++;
  }

  for (let i = 1; i <= 100; i++) {
    if (!count[i]) continue;
    for (let j = i; j <= 100; j++) {
      if (!count[j]) continue;
      for (let k = j + (i === j ? 1 : 0); k <= 100; k++) {
        if (!count[k]) continue;

        const sum = i + j + k;
        const divisors = (sum % i === 0 ? 1 : 0)
          + (sum % j === 0 ? 1 : 0) + (sum % k === 0 ? 1 : 0);

        if (divisors === 1) {
          if (i === j) {
            result += count[i] * (count[i] - 1) / 2 * count[k];
          } else if (j === k) {
            result += count[i] * count[j] * (count[j] - 1) / 2;
          } else {
            result += count[i] * count[j] * count[k];
          }
        }
      }
    }
  }

  return result * 6;
};
