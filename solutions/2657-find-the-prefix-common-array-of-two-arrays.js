/**
 * 2657. Find the Prefix Common Array of Two Arrays
 * https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/
 * Difficulty: Medium
 *
 * You are given two 0-indexed integer permutations A and B of length n.
 *
 * A prefix common array of A and B is an array C such that C[i] is equal to the count of
 * numbers that are present at or before the index i in both A and B.
 *
 * Return the prefix common array of A and B.
 *
 * A sequence of n integers is called a permutation if it contains all integers from 1 to
 * n exactly once.
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
  const result = [];

  for (let i = 0, count = 0, set = new Set(); i < A.length; i++) {
    if (set.has(A[i])) count++;
    if (set.has(B[i])) count++;
    if (A[i] === B[i]) count++;
    [A[i], B[i]].forEach(n => set.add(n));
    result.push(count);
  }

  return result;
};
