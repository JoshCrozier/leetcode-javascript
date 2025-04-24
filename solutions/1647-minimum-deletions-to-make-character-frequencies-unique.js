/**
 * 1647. Minimum Deletions to Make Character Frequencies Unique
 * https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
 * Difficulty: Medium
 *
 * A string s is called good if there are no two different characters in s that have the
 * same frequency.
 *
 * Given a string s, return the minimum number of characters you need to delete to make s good.
 *
 * The frequency of a character in a string is the number of times it appears in the string.
 * For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
  const charFrequencies = new Array(26).fill(0);
  for (const char of s) {
    charFrequencies[char.charCodeAt(0) - 97]++;
  }

  charFrequencies.sort((a, b) => b - a);
  let result = 0;
  const usedFrequencies = new Set();

  for (const freq of charFrequencies) {
    if (freq === 0) break;
    let currentFreq = freq;
    while (usedFrequencies.has(currentFreq) && currentFreq > 0) {
      currentFreq--;
      result++;
    }
    usedFrequencies.add(currentFreq);
  }

  return result;
};
