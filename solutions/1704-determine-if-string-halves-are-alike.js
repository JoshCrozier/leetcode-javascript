/**
 * 1704. Determine if String Halves Are Alike
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/
 * Difficulty: Easy
 *
 * You are given a string s of even length. Split this string into two halves of equal lengths,
 * and let a be the first half and b be the second half.
 *
 * Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A',
 * 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
 *
 * Return true if a and b are alike. Otherwise, return false.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let firstHalfVowels = 0;
  let secondHalfVowels = 0;
  const mid = s.length / 2;

  for (let i = 0; i < mid; i++) {
    if (vowels.has(s[i])) firstHalfVowels++;
    if (vowels.has(s[i + mid])) secondHalfVowels++;
  }

  return firstHalfVowels === secondHalfVowels;
};
