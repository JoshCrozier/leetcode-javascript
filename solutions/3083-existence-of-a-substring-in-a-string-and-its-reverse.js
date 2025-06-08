/**
 * 3083. Existence of a Substring in a String and Its Reverse
 * https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/
 * Difficulty: Easy
 *
 * Given a string s, find any substring of length 2 which is also present in the reverse of s.
 *
 * Return true if such a substring exists, and false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
  const reversed = s.split('').reverse().join('');

  for (let i = 0; i < s.length - 1; i++) {
    const substr = s.slice(i, i + 2);
    if (reversed.includes(substr)) {
      return true;
    }
  }

  return false;
};
