/**
 * 1307. Verbal Arithmetic Puzzle
 * https://leetcode.com/problems/verbal-arithmetic-puzzle/
 * Difficulty: Hard
 *
 * Given an equation, represented by words on the left side and the result on the right side.
 *
 * You need to check if the equation is solvable under the following rules:
 * - Each character is decoded as one digit (0 - 9).
 * - No two characters can map to the same digit.
 * - Each words[i] and result are decoded as one number without leading zeros.
 * - Sum of numbers on the left side (words) will equal to the number on the right side (result).
 *
 * Return true if the equation is solvable, otherwise return false.
 */

/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
var isSolvable = function(words, result) {
  const charToDigit = new Map();
  const usedDigits = new Set();
  const leadingChars = new Set();

  if (words.some(word => word.length > result.length)) return false;

  words.forEach(word => {
    if (word.length > 1) leadingChars.add(word[0]);
  });
  if (result.length > 1) leadingChars.add(result[0]);

  return solve(0, 0, 0);

  function solve(pos, wordIdx, carry) {
    if (pos >= result.length) return carry === 0;

    if (wordIdx <= words.length - 1) {
      const word = words[wordIdx];
      if (pos >= word.length) return solve(pos, wordIdx + 1, carry);

      const char = word[word.length - 1 - pos];
      if (charToDigit.has(char)) return solve(pos, wordIdx + 1, carry + charToDigit.get(char));

      for (let digit = leadingChars.has(char) ? 1 : 0; digit <= 9; digit++) {
        if (usedDigits.has(digit)) continue;
        usedDigits.add(digit);
        charToDigit.set(char, digit);
        if (solve(pos, wordIdx + 1, carry + digit)) return true;
        usedDigits.delete(digit);
        charToDigit.delete(char);
      }
      return false;
    }

    const sumDigit = carry % 10;
    const resultChar = result[result.length - 1 - pos];

    if (!charToDigit.has(resultChar)) {
      if (usedDigits.has(sumDigit) || (pos === result.length - 1 && sumDigit === 0)) return false;
      charToDigit.set(resultChar, sumDigit);
      usedDigits.add(sumDigit);
      const success = solve(pos + 1, 0, (carry - sumDigit) / 10);
      charToDigit.delete(resultChar);
      usedDigits.delete(sumDigit);
      return success;
    }

    return charToDigit.get(resultChar) === sumDigit && solve(pos + 1, 0, (carry - sumDigit) / 10);
  }
};
