/**
 * 925. Long Pressed Name
 * https://leetcode.com/problems/long-pressed-name/
 * Difficulty: Easy
 *
 * Your friend is typing his name into a keyboard. Sometimes, when typing a character c,
 * the key might get long pressed, and the character will be typed 1 or more times.
 *
 * You examine the typed characters of the keyboard.  Return True if it is possible that
 * it was your friends name, with some characters (possibly none) being long pressed.
 */

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let i = 0;
  return typed.split('').filter(l => name[i] === l ? ++i : false).length === name.length;
};
