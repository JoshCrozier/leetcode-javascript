/**
 * 1271. Hexspeak
 * https://leetcode.com/problems/hexspeak/
 * Difficulty: Easy
 *
 * A decimal number can be converted to its Hexspeak representation by first converting it to
 * an uppercase hexadecimal string, then replacing all occurrences of the digit '0' with the
 * letter 'O', and the digit '1' with the letter 'I'. Such a representation is valid if and
 * only if it consists only of the letters in the set {'A', 'B', 'C', 'D', 'E', 'F', 'I', 'O'}.
 *
 * Given a string num representing a decimal integer n, return the Hexspeak representation of
 * n if it is valid, otherwise return "ERROR".
 */

/**
 * @param {string} num
 * @return {string}
 */
var toHexspeak = function(num) {
  const hex = BigInt(num).toString(16).toUpperCase();
  const validChars = new Set(['0', '1', 'A', 'B', 'C', 'D', 'E', 'F']);

  for (const char of hex) {
    if (!validChars.has(char)) {
      return 'ERROR';
    }
  }

  return hex.replace(/0/g, 'O').replace(/1/g, 'I');
};
