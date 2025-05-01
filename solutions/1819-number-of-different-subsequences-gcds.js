/**
 * 1819. Number of Different Subsequences GCDs
 * https://leetcode.com/problems/number-of-different-subsequences-gcds/
 * Difficulty: Hard
 *
 * You are given an array nums that consists of positive integers.
 *
 * The GCD of a sequence of numbers is defined as the greatest integer that divides all the
 * numbers in the sequence evenly.
 * - For example, the GCD of the sequence [4,6,16] is 2.
 *
 * A subsequence of an array is a sequence that can be formed by removing some elements (possibly
 * none) of the array.
 * - For example, [2,5,10] is a subsequence of [1,2,1,2,4,1,5,10].
 *
 * Return the number of different GCDs among all non-empty subsequences of nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function(nums) {
  const maxNum = Math.max(...nums);
  const exists = new Array(maxNum + 1).fill(false);
  let result = 0;

  function gcd(a, b) {
    while (b) [a, b] = [b, a % b];
    return a;
  }

  for (const num of nums) {
    exists[num] = true;
  }

  for (let i = 1; i <= maxNum; i++) {
    let currentGcd = 0;
    for (let j = i; j <= maxNum; j += i) {
      if (exists[j]) {
        currentGcd = currentGcd ? gcd(currentGcd, j) : j;
      }
    }
    if (currentGcd === i) result++;
  }

  return result;
};
