/**
 * 1974. Minimum Time to Type Word Using Special Typewriter
 * https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/
 * Difficulty: Easy
 *
 * There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle
 * with a pointer. A character can only be typed if the pointer is pointing to that character.
 * The pointer is initially pointing to the character 'a'.
 *
 * Each second, you may perform one of the following operations:
 * - Move the pointer one character counterclockwise or clockwise.
 * - Type the character the pointer is currently on.
 *
 * Given a string word, return the minimum number of seconds to type out the characters in word.
 */

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
  let position = 'a';
  let result = 0;

  for (const char of word) {
    const clockwise = Math.abs(char.charCodeAt(0) - position.charCodeAt(0));
    const counterclockwise = 26 - clockwise;
    const moves = Math.min(clockwise, counterclockwise);
    result += moves + 1;
    position = char;
  }

  return result;
};
