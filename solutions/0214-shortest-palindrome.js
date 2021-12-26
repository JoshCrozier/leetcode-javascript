/**
 * 214. Shortest Palindrome
 * https://leetcode.com/problems/shortest-palindrome/
 * Difficulty: Hard
 *
 * You are given a string s. You can convert s to a palindrome by adding characters
 * in front of it.
 *
 * Return the shortest palindrome you can find by performing this transformation.
 */

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  const reversed = s.split('').reverse().join('');
  for (let i = s.length; i > 0; i--) {
    if (s.slice(0, i) === reversed.slice(s.length - i)) {
      return reversed.slice(0, reversed.length - i) + s;
    }
  }
  return '';
};
