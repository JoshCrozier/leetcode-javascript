/**
 * 763. Partition Labels
 * https://leetcode.com/problems/partition-labels/
 * Difficulty: Medium
 *
 * You are given a string s. We want to partition the string into as many parts as
 * possible so that each letter appears in at most one part. For example, the
 * string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as
 * ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.
 *
 * Note that the partition is done so that after concatenating all the parts in
 * order, the resultant string should be s.
 *
 * Return a list of integers representing the size of these parts.
 */

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  const result = [];
  for (let i = 0, start = 0, end = 0; i < s.length; i++) {
    end = Math.max(end, map.get(s[i]));
    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
};
