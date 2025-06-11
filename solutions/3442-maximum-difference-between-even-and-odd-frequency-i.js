/**
 * 3442. Maximum Difference Between Even and Odd Frequency I
 * https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/
 * Difficulty: Easy
 *
 * You are given a string s consisting of lowercase English letters.
 *
 * Your task is to find the maximum difference diff = freq(a1) - freq(a2) between the frequency
 * of characters a1 and a2 in the string such that:
 * - a1 has an odd frequency in the string.
 * - a2 has an even frequency in the string.
 *
 * Return this maximum difference.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let maxOdd = 0;
  let minEven = Infinity;

  for (const freq of map.values()) {
    if (freq % 2 === 1) {
      maxOdd = Math.max(maxOdd, freq);
    } else {
      minEven = Math.min(minEven, freq);
    }
  }

  return maxOdd - minEven;
};
