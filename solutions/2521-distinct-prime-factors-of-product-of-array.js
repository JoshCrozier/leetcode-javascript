/**
 * 2521. Distinct Prime Factors of Product of Array
 * https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/
 * Difficulty: Medium
 *
 * Given an array of positive integers nums, return the number of distinct prime factors in the
 * product of the elements of nums.
 *
 * Note that:
 * - A number greater than 1 is called prime if it is divisible by only 1 and itself.
 * - An integer val1 is a factor of another integer val2 if val2 / val1 is an integer.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function(nums) {
  const set = new Set();

  for (const num of nums) {
    factorize(num);
  }

  return set.size;

  function factorize(num) {
    for (let i = 2; i * i <= num; i++) {
      while (num % i === 0) {
        set.add(i);
        num /= i;
      }
    }
    if (num > 1) set.add(num);
  }
};
