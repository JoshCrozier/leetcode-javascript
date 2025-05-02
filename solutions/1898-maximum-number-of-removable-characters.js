/**
 * 1898. Maximum Number of Removable Characters
 * https://leetcode.com/problems/maximum-number-of-removable-characters/
 * Difficulty: Medium
 *
 * You are given two strings s and p where p is a subsequence of s. You are also given a distinct
 * 0-indexed integer array removable containing a subset of indices of s (s is also 0-indexed).
 *
 * You want to choose an integer k (0 <= k <= removable.length) such that, after removing k
 * characters from s using the first k indices in removable, p is still a subsequence of s.
 * More formally, you will mark the character at s[removable[i]] for each 0 <= i < k, then
 * remove all marked characters and check if p is still a subsequence.
 *
 * Return the maximum k you can choose such that p is still a subsequence of s after the removals.
 *
 * A subsequence of a string is a new string generated from the original string with some
 * characters (can be none) deleted without changing the relative order of the remaining characters.
 */

/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(s, p, removable) {
  let left = 0;
  let right = removable.length;

  while (left <= right) {
    const mid = (left + right) >> 1;
    const removed = new Set(removable.slice(0, mid));
    let i = 0;
    let j = 0;

    while (i < s.length && j < p.length) {
      if (!removed.has(i) && s[i] === p[j]) {
        j++;
      }
      i++;
    }

    if (j === p.length) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};
