/**
 * 2709. Greatest Common Divisor Traversal
 * https://leetcode.com/problems/greatest-common-divisor-traversal/
 * Difficulty: Hard
 *
 * You are given a 0-indexed integer array nums, and you are allowed to traverse between its
 * indices. You can traverse between index i and index j, i != j, if and only if gcd(nums[i],
 * nums[j]) > 1, where gcd is the greatest common divisor.
 *
 * Your task is to determine if for every pair of indices i and j in nums, where i < j, there
 * exists a sequence of traversals that can take us from i to j.
 *
 * Return true if it is possible to traverse between all such pairs of indices, or false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function(nums) {
  if (nums.length === 1) return true;
  const n = nums.length;
  const maxNum = Math.max(...nums);
  const parent = new Array(maxNum + 1).fill().map((_, i) => i);
  const rank = new Array(maxNum + 1).fill(0);

  const primeToIndex = new Map();
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) return false;
    const factors = getPrimeFactors(nums[i]);
    for (const prime of factors) {
      if (primeToIndex.has(prime)) {
        union(primeToIndex.get(prime), i);
      } else {
        primeToIndex.set(prime, i);
      }
    }
  }

  const root = find(0);
  for (let i = 1; i < n; i++) {
    if (find(i) !== root) return false;
  }

  return true;

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    const px = find(x);
    const py = find(y);
    if (px === py) return;
    if (rank[px] < rank[py]) {
      parent[px] = py;
    } else if (rank[px] > rank[py]) {
      parent[py] = px;
    } else {
      parent[py] = px;
      rank[px]++;
    }
  }

  function getPrimeFactors(num) {
    const factors = [];
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
        while (num % i === 0) num /= i;
      }
    }
    if (num > 1) factors.push(num);
    return factors;
  }
};
