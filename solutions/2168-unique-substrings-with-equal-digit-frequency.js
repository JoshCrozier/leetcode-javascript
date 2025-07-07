/**
 * 2168. Unique Substrings With Equal Digit Frequency
 * https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/
 * Difficulty: Medium
 *
 * Given a digit string s, return the number of unique substrings of s where every digit appears
 * the same number of times.
 */

/**
 * @param {string} s
 * @return {number}
 */
var equalDigitFrequency = function(s) {
  const uniqueSubstrings = new Set();
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const digitCount = new Map();

    for (let j = i; j < n; j++) {
      const digit = s[j];
      digitCount.set(digit, (digitCount.get(digit) || 0) + 1);

      if (hasEqualFrequency(digitCount)) {
        uniqueSubstrings.add(s.substring(i, j + 1));
      }
    }
  }

  return uniqueSubstrings.size;

  function hasEqualFrequency(counts) {
    const frequencies = Array.from(counts.values());
    return frequencies.every(freq => freq === frequencies[0]);
  }
};
