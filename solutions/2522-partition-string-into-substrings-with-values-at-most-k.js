/**
 * 2522. Partition String Into Substrings With Values at Most K
 * https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/
 * Difficulty: Medium
 *
 * You are given a string s consisting of digits from 1 to 9 and an integer k.
 *
 * A partition of a string s is called good if:
 * - Each digit of s is part of exactly one substring.
 * - The value of each substring is less than or equal to k.
 *
 * Return the minimum number of substrings in a good partition of s. If no good partition of
 * s exists, return -1.
 *
 * Note that:
 * - The value of a string is its result when interpreted as an integer. For example, the value
 *   of "123" is 123 and the value of "1" is 1.
 * - A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
  let result = 1;
  let current = 0;

  for (const digit of s) {
    const value = current * 10 + Number(digit);
    if (value <= k) {
      current = value;
    } else {
      if (Number(digit) > k) return -1;
      current = Number(digit);
      result++;
    }
  }

  return result;
};
