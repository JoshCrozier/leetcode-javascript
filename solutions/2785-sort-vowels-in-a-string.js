/**
 * 2785. Sort Vowels in a String
 * https://leetcode.com/problems/sort-vowels-in-a-string/
 * Difficulty: Medium
 *
 * Given a 0-indexed string s, permute s to get a new string t such that:
 * - All consonants remain in their original places. More formally, if there is an index i
 *   with 0 <= i < s.length such that s[i] is a consonant, then t[i] = s[i].
 * - The vowels must be sorted in the nondecreasing order of their ASCII values. More formally,
 *   for pairs of indices i, j with 0 <= i < j < s.length such that s[i] and s[j] are vowels,
 *   then t[i] must not have a higher ASCII value than t[j].
 *
 * Return the resulting string.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase or uppercase.
 * Consonants comprise all letters that are not vowels.
 */

/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const vowelChars = [];

  for (const char of s) {
    if (vowels.has(char)) {
      vowelChars.push(char);
    }
  }

  vowelChars.sort();

  const result = [...s];
  let vowelIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      result[i] = vowelChars[vowelIndex++];
    }
  }

  return result.join('');
};
