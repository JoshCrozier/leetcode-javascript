/**
 * 2947. Count Beautiful Substrings I
 * https://leetcode.com/problems/count-beautiful-substrings-i/
 * Difficulty: Medium
 *
 * You are given a string s and a positive integer k.
 *
 * Let vowels and consonants be the number of vowels and consonants in a string.
 *
 * A string is beautiful if:
 * - vowels == consonants.
 * - (vowels * consonants) % k == 0, in other terms the multiplication of vowels and
 *   consonants is divisible by k.
 *
 * Return the number of non-empty beautiful substrings in the given string s.
 *
 * A substring is a contiguous sequence of characters in a string.
 *
 * Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 *
 * Consonant letters in English are every letter except vowels.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let result = 0;

  for (let start = 0; start < s.length; start++) {
    let vowelCount = 0;
    let consonantCount = 0;

    for (let end = start; end < s.length; end++) {
      if (vowels.has(s[end])) {
        vowelCount++;
      } else {
        consonantCount++;
      }

      if (vowelCount === consonantCount && (vowelCount * consonantCount) % k === 0) {
        result++;
      }
    }
  }

  return result;
};
