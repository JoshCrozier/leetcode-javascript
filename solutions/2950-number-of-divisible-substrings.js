/**
 * 2950. Number of Divisible Substrings
 * https://leetcode.com/problems/number-of-divisible-substrings/
 * Difficulty: Medium
 *
 * Each character of the English alphabet has been mapped to a digit as shown below.
 *
 * A string is divisible if the sum of the mapped values of its characters is divisible
 * by its length.
 *
 * Given a string s, return the number of divisible substrings of s.
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 */

/**
 * @param {string} word
 * @return {number}
 */
var countDivisibleSubstrings = function(word) {
  let result = 0;

  for (let i = 1; i < 10; i++) {
    const prefixCount = new Map([[0, 1]]);
    let prefixSum = 0;

    for (const char of word) {
      const charValue = 9 - Math.floor((122 - char.charCodeAt(0)) / 3);
      prefixSum += charValue - i;
      result += prefixCount.get(prefixSum) || 0;
      prefixCount.set(prefixSum, (prefixCount.get(prefixSum) || 0) + 1);
    }
  }

  return result;
};
