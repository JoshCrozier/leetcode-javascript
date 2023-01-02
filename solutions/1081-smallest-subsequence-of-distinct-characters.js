/**
 * 1081. Smallest Subsequence of Distinct Characters
 * https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 * Difficulty: Medium
 *
 * Given a string s, return the lexicographically smallest subsequence
 * of s that contains all the distinct characters of s exactly once.
 */

/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (stack.indexOf(letter) > -1) {
      continue;
    }
    while (stack.length > 0 && stack[stack.length - 1] > letter && s.indexOf(stack[stack.length - 1], i) > i) {
      stack.pop();
    }
    stack.push(letter);
  }

  return stack.join('');
};
