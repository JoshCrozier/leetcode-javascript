/**
 * 2268. Minimum Number of Keypresses
 * https://leetcode.com/problems/minimum-number-of-keypresses/
 * Difficulty: Medium
 *
 * You have a keypad with 9 buttons, numbered from 1 to 9, each mapped to lowercase English
 * letters. You can choose which characters each button is matched to as long as:
 * - All 26 lowercase English letters are mapped to.
 * - Each character is mapped to by exactly 1 button.
 * - Each button maps to at most 3 characters.
 *
 * To type the first character matched to a button, you press the button once. To type the
 * second character, you press the button twice, and so on.
 *
 * Given a string s, return the minimum number of keypresses needed to type s using your keypad.
 *
 * Note that the characters mapped to by each button, and the order they are mapped in cannot
 * be changed.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumKeypresses = function(s) {
  const frequency = new Map();
  for (const char of s) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  const frequencies = Array.from(frequency.values()).sort((a, b) => b - a);

  let keypresses = 0;
  for (let i = 0; i < frequencies.length; i++) {
    const pressesPerChar = Math.floor(i / 9) + 1;
    keypresses += frequencies[i] * pressesPerChar;
  }

  return keypresses;
};
