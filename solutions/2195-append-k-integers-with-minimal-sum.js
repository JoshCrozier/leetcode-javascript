/**
 * 2195. Append K Integers With Minimal Sum
 * https://leetcode.com/problems/append-k-integers-with-minimal-sum/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer k. Append k unique positive integers that do
 * not appear in nums to nums such that the resulting total sum is minimum.
 *
 * Return the sum of the k integers appended to nums.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function(nums, k) {
  const sortedUnique = [...new Set(nums)].sort((a, b) => a - b);
  let sum = BigInt(0);
  let current = 1;
  let i = 0;

  while (k > 0 && i < sortedUnique.length) {
    if (current < sortedUnique[i]) {
      const count = Math.min(k, sortedUnique[i] - current);
      sum += (BigInt(current) + BigInt(current + count - 1)) * BigInt(count) / BigInt(2);
      k -= count;
      current += count;
    } else {
      current = sortedUnique[i] + 1;
      i++;
    }
  }

  if (k > 0) {
    sum += (BigInt(current) + BigInt(current + k - 1)) * BigInt(k) / BigInt(2);
  }

  return Number(sum);
};
