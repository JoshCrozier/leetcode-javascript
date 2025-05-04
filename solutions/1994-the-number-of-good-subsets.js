/**
 * 1994. The Number of Good Subsets
 * https://leetcode.com/problems/the-number-of-good-subsets/
 * Difficulty: Hard
 *
 * You are given an integer array nums. We call a subset of nums good if its product can be
 * represented as a product of one or more distinct prime numbers.
 *
 * - For example, if nums = [1, 2, 3, 4]:
 *   - [2, 3], [1, 2, 3], and [1, 3] are good subsets with products 6 = 2*3, 6 = 2*3, and 3 = 3
 *     respectively.
 *   - [1, 4] and [4] are not good subsets with products 4 = 2*2 and 4 = 2*2 respectively.
 *
 * Return the number of different good subsets in nums modulo 109 + 7.
 *
 * A subset of nums is any array that can be obtained by deleting some (possibly none or all)
 * elements from nums. Two subsets are different if and only if the chosen indices to delete
 * are different.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubsets = function(nums) {
  const MOD = 1e9 + 7;
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const freq = new Array(31).fill(0);
  for (const num of nums) {
    freq[num]++;
  }

  const dp = new Array(1 << primes.length).fill(0);
  dp[0] = 1;
  for (let i = 0; i < freq[1]; i++) {
    dp[0] = (dp[0] * 2) % MOD;
  }

  for (let num = 2; num <= 30; num++) {
    if (freq[num] === 0) continue;
    let mask = 0;
    let valid = true;
    for (let i = 0; i < primes.length; i++) {
      let count = 0;
      let temp = num;
      while (temp % primes[i] === 0) {
        count++;
        temp /= primes[i];
      }
      if (count > 1) {
        valid = false;
        break;
      }
      if (count === 1) {
        mask |= 1 << i;
      }
    }

    if (!valid) continue;

    const prev = dp.slice();
    for (let j = 0; j < 1 << primes.length; j++) {
      if ((j & mask) === 0) {
        dp[j | mask] = (dp[j | mask] + prev[j] * freq[num]) % MOD;
      }
    }
  }

  let result = 0;
  for (let i = 1; i < 1 << primes.length; i++) {
    result = (result + dp[i]) % MOD;
  }

  return result;
};
