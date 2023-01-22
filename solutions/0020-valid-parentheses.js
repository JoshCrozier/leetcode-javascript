/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * Difficulty: Easy
 *
 * Given a string s containing just the characters '(', ')', '{', '}',
 * '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
    } else {
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
