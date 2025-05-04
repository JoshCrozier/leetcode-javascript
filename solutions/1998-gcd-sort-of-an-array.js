/**
 * 1998. GCD Sort of an Array
 * https://leetcode.com/problems/gcd-sort-of-an-array/
 * Difficulty: Hard
 *
 * You are given an integer array nums, and you can perform the following operation any
 * number of times on nums:
 * - Swap the positions of two elements nums[i] and nums[j] if gcd(nums[i], nums[j]) > 1
 *   where gcd(nums[i], nums[j]) is the greatest common divisor of nums[i] and nums[j].
 *
 * Return true if it is possible to sort nums in non-decreasing order using the above swap
 * method, or false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var gcdSort = function(nums) {
  const maxNum = Math.max(...nums);
  const parent = new Array(maxNum + 1).fill().map((_, i) => i);
  const minPrime = new Array(maxNum + 1).fill(0);
  for (let i = 2; i <= maxNum; i++) {
    if (minPrime[i] === 0) {
      for (let j = i; j <= maxNum; j += i) {
        minPrime[j] = i;
      }
    }
  }

  const groups = new Map();
  for (const num of nums) {
    let curr = num;
    const primes = new Set();
    while (curr > 1) {
      const prime = minPrime[curr];
      primes.add(prime);
      curr /= prime;
    }
    for (const prime of primes) {
      if (!groups.has(prime)) groups.set(prime, []);
      groups.get(prime).push(num);
    }
  }

  for (const numbers of groups.values()) {
    for (let i = 1; i < numbers.length; i++) {
      union(numbers[i - 1], numbers[i], parent);
    }
  }

  const sorted = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (find(nums[i], parent) !== find(sorted[i], parent)) {
      return false;
    }
  }

  return true;

  function find(x, parent) {
    if (parent[x] !== x) parent[x] = find(parent[x], parent);
    return parent[x];
  }

  function union(x, y, parent) {
    parent[find(x, parent)] = find(y, parent);
  }
};
