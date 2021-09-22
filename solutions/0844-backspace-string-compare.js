/**
 * 844. Backspace String Compare
 * https://leetcode.com/problems/backspace-string-compare/
 * Difficulty: Easy
 *
 * Given two strings `s` and `t`, return true if they are equal when both
 * are typed into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  return handleBackspaces(s) === handleBackspaces(t);
};

function handleBackspaces(input) {
  return input.split('').reduce((result, char) => {
    if (char === '#') {
      result.pop();
    } else {
      result.push(char);
    }
    return result;
  }, []).join('');
}
