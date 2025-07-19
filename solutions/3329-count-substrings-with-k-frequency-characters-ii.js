/**
 * 3329. Count Substrings With K-Frequency Characters II
 * https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/
 * Difficulty: Hard
 *
 * Given a string s and an integer k, return the total number of substrings of s where at
 * least one character appears at least k times.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function(s, k) {
  const n = s.length;
  const map = new Array(26).fill(0);
  let result = 0;
  let leftPointer = 0;

  for (let rightPointer = 0; rightPointer < n; rightPointer++) {
    const rightCharIndex = s.charCodeAt(rightPointer) - 97;
    map[rightCharIndex]++;

    while (map[rightCharIndex] >= k) {
      result += n - rightPointer;
      const leftCharIndex = s.charCodeAt(leftPointer) - 97;
      map[leftCharIndex]--;
      leftPointer++;
    }
  }

  return result;
};
