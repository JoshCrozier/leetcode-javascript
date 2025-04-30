/**
 * 1781. Sum of Beauty of All Substrings
 * https://leetcode.com/problems/sum-of-beauty-of-all-substrings/
 * Difficulty: Medium
 *
 * The beauty of a string is the difference in frequencies between the most frequent and
 * least frequent characters.
 * - For example, the beauty of "abaacc" is 3 - 1 = 2.
 *
 * Given a string s, return the sum of beauty of all of its substrings.
 */

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const freq = new Map();
    for (let j = i; j < s.length; j++) {
      freq.set(s[j], (freq.get(s[j]) || 0) + 1);
      let maxFreq = 0;
      let minFreq = Infinity;
      for (const count of freq.values()) {
        maxFreq = Math.max(maxFreq, count);
        minFreq = Math.min(minFreq, count);
      }
      result += maxFreq - minFreq;
    }
  }

  return result;
};
