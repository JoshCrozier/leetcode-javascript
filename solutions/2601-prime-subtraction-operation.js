/**
 * 2601. Prime Subtraction Operation
 * https://leetcode.com/problems/prime-subtraction-operation/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums of length n.
 *
 * You can perform the following operation as many times as you want:
 * - Pick an index i that you haven’t picked before, and pick a prime p strictly less than
 *   nums[i], then subtract p from nums[i].
 *
 * Return true if you can make nums a strictly increasing array using the above operation
 * and false otherwise.
 *
 * A strictly increasing array is an array whose each element is strictly greater than its
 * preceding element.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function(nums) {
  const primes = generatePrimes(1000);
  const adjusted = [...nums];
  let prev = 0;

  for (let i = 0; i < adjusted.length; i++) {
    const curr = adjusted[i];
    let maxPrime = 0;

    for (const prime of primes) {
      if (prime >= curr) break;
      if (curr - prime > prev && (i === adjusted.length - 1 || curr - prime < adjusted[i + 1])) {
        maxPrime = prime;
      }
    }

    adjusted[i] -= maxPrime;
    if (adjusted[i] <= prev) return false;
    prev = adjusted[i];
  }

  return true;

  function generatePrimes(limit) {
    const group = new Array(limit + 1).fill(true);
    const primes = [];
    group[0] = group[1] = false;

    for (let i = 2; i <= limit; i++) {
      if (group[i]) {
        primes.push(i);
        for (let j = i * i; j <= limit; j += i) {
          group[j] = false;
        }
      }
    }

    return primes;
  }
};
