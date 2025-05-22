/**
 * 2405. Optimal Partition of String
 * https://leetcode.com/problems/optimal-partition-of-string/
 * Difficulty: Medium
 *
 * Given a string s, partition the string into one or more substrings such that the characters
 * in each substring are unique. That is, no letter appears in a single substring more than once.
 *
 * Return the minimum number of substrings in such a partition.
 *
 * Note that each character should belong to exactly one substring in a partition.
 */

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  const set = new Set();
  let result = 1;

  for (const char of s) {
    if (set.has(char)) {
      set.clear();
      result++;
    }
    set.add(char);
  }

  return result;
};
