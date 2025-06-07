/**
 * 3043. Find the Length of the Longest Common Prefix
 * https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/
 * Difficulty: Medium
 *
 * You are given two arrays with positive integers arr1 and arr2.
 *
 * A prefix of a positive integer is an integer formed by one or more of its digits, starting
 * from its leftmost digit. For example, 123 is a prefix of the integer 12345, while 234 is not.
 *
 * A common prefix of two integers a and b is an integer c, such that c is a prefix of both a
 * and b. For example, 5655359 and 56554 have common prefixes 565 and 5655 while 1223 and 43456
 * do not have a common prefix.
 *
 * You need to find the length of the longest common prefix between all pairs of integers (x, y)
 * such that x belongs to arr1 and y belongs to arr2.
 *
 * Return the length of the longest common prefix among all pairs. If no common prefix exists
 * among them, return 0.
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
  const prefixSet = new Set();
  let result = 0;

  for (const num of arr1) {
    let prefix = num;
    while (prefix > 0) {
      prefixSet.add(prefix);
      prefix = Math.floor(prefix / 10);
    }
  }

  for (const num of arr2) {
    let prefix = num;
    while (prefix > 0) {
      if (prefixSet.has(prefix)) {
        result = Math.max(result, String(prefix).length);
      }
      prefix = Math.floor(prefix / 10);
    }
  }

  return result;
};
