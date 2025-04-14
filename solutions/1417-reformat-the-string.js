/**
 * 1417. Reformat The String
 * https://leetcode.com/problems/reformat-the-string/
 * Difficulty: Easy
 *
 * You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase
 * English letters and digits).
 *
 * You have to find a permutation of the string where no letter is followed by another letter and
 * no digit is followed by another digit. That is, no two adjacent characters have the same type.
 *
 * Return the reformatted string or return an empty string if it is impossible to reformat the
 * string.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  const letters = [];
  const digits = [];
  for (const char of s) {
    if (isNaN(char)) {
      letters.push(char);
    } else {
      digits.push(char);
    }
  }
  if (Math.abs(letters.length - digits.length) > 1) {
    return '';
  }
  const result = [];
  const longer = letters.length >= digits.length ? letters : digits;
  const shorter = longer === letters ? digits : letters;
  for (let i = 0; i < longer.length; i++) {
    result.push(longer[i]);
    if (i < shorter.length) {
      result.push(shorter[i]);
    }
  }
  return result.join('');
};
