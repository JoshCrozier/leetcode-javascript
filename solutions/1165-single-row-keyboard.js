/**
 * 1165. Single-Row Keyboard
 * https://leetcode.com/problems/single-row-keyboard/
 * Difficulty: Easy
 *
 * There is a special keyboard with all keys in a single row.
 *
 * Given a string keyboard of length 26 indicating the layout of the keyboard (indexed
 * from 0 to 25). Initially, your finger is at index 0. To type a character, you have
 * to move your finger to the index of the desired character. The time taken to move
 * your finger from index i to index j is |i - j|.
 *
 * You want to type a string word. Write a function to calculate how much time it takes
 * to type it with one finger.
 */

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
  const map = new Map();

  for (let i = 0; i < keyboard.length; i++) {
    map.set(keyboard[i], i);
  }

  let currentPosition = 0;
  let result = 0;

  for (const char of word) {
    const targetPosition = map.get(char);
    result += Math.abs(currentPosition - targetPosition);
    currentPosition = targetPosition;
  }

  return result;
};
