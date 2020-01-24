/**
 * 541. Reverse String II
 * https://leetcode.com/problems/reverse-string-ii/
 * Difficulty: Easy
 *
 * Given a string and an integer k, you need to reverse the first k characters
 * for every 2k characters counting from the start of the string. If there are
 * less than k characters left, reverse all of them. If there are less than 2k
 * but greater than or equal to k characters, then reverse the first k
 * characters and left the other as original.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const split = s.split('');
  for (let i = 0; i < s.length; i += 2 * k) {
    split.splice(i, 0, ...split.splice(i, k).reverse());
  }
  return split.join('');
};
