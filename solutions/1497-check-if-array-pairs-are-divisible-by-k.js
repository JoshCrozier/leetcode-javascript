/**
 * 1497. Check If Array Pairs Are Divisible by k
 * https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/
 * Difficulty: Medium
 *
 * Given an array of integers arr of even length n and an integer k.
 *
 * We want to divide the array into exactly n / 2 pairs such that the sum of each pair is
 * divisible by k.
 *
 * Return true If you can find a way to do that or false otherwise.
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
  const remainders = new Array(k).fill(0);

  for (const num of arr) {
    const remainder = ((num % k) + k) % k;
    remainders[remainder]++;
  }

  for (let i = 0; i <= Math.floor(k / 2); i++) {
    if (i === 0 || i * 2 === k) {
      if (remainders[i] % 2 !== 0) return false;
    } else if (remainders[i] !== remainders[k - i]) {
      return false;
    }
  }

  return true;
};
