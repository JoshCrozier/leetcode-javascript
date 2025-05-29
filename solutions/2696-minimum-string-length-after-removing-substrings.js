/**
 * 2696. Minimum String Length After Removing Substrings
 * https://leetcode.com/problems/minimum-string-length-after-removing-substrings/
 * Difficulty: Easy
 *
 * You are given a string s consisting only of uppercase English letters.
 *
 * You can apply some operations to this string where, in one operation, you can remove any
 * occurrence of one of the substrings "AB" or "CD" from s.
 *
 * Return the minimum possible length of the resulting string that you can obtain.
 *
 * Note that the string concatenates after removing the substring and could produce new "AB"
 * or "CD" substrings.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  const stack = [];

  for (const char of s) {
    if (stack.length && ((stack[stack.length - 1] === 'A' && char === 'B')
        || (stack[stack.length - 1] === 'C' && char === 'D'))) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length;
};
