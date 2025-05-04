/**
 * 1957. Delete Characters to Make Fancy String
 * https://leetcode.com/problems/delete-characters-to-make-fancy-string/
 * Difficulty: Easy
 *
 * A fancy string is a string where no three consecutive characters are equal.
 *
 * Given a string s, delete the minimum possible number of characters from s to make
 * it fancy.
 *
 * Return the final string after the deletion. It can be shown that the answer will
 * always be unique.
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  let result = s[0];
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      if (count < 2) {
        result += s[i];
        count++;
      }
    } else {
      result += s[i];
      count = 1;
    }
  }

  return result;
};
