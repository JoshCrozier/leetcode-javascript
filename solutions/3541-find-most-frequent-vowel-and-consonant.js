/**
 * 3541. Find Most Frequent Vowel and Consonant
 * https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/
 * Difficulty: Easy
 *
 * You are given a string s consisting of lowercase English letters ('a' to 'z').
 *
 * Your task is to:
 * - Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
 * - Find the consonant (all other letters excluding vowels) with the maximum frequency.
 *
 * Return the sum of the two frequencies.
 *
 * Note: If multiple vowels or consonants have the same maximum frequency, you may choose
 * any one of them. If there are no vowels or no consonants in the string, consider their
 * frequency as 0.
 *
 * The frequency of a letter x is the number of times it occurs in the string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const vowelFreq = {};
  const consonantFreq = {};

  for (const char of s) {
    if (vowels.has(char)) {
      vowelFreq[char] = (vowelFreq[char] || 0) + 1;
    } else {
      consonantFreq[char] = (consonantFreq[char] || 0) + 1;
    }
  }

  const maxVowelFreq = Math.max(0, ...Object.values(vowelFreq));
  const maxConsonantFreq = Math.max(0, ...Object.values(consonantFreq));

  return maxVowelFreq + maxConsonantFreq;
};
