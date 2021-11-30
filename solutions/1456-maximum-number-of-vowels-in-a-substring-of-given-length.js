/**
 * 1456. Maximum Number of Vowels in a Substring of Given Length
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 * Difficulty: Medium
 *
 * Given a string s and an integer k.
 *
 * Return the maximum number of vowel letters in any substring of s with length k.
 *
 * Vowel letters in English are (a, e, i, o, u).
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const vowels = 'aeiou';
  let result = 0;

  for (let i = 0, count = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
    if (i >= k && vowels.includes(s[i - k])) {
      count--;
    }
    result = Math.max(result, count);
  }

  return result;
};
