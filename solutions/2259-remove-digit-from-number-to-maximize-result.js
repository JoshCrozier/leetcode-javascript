/**
 * 2259. Remove Digit From Number to Maximize Result
 * https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/
 * Difficulty: Easy
 *
 * You are given a string number representing a positive integer and a character digit.
 *
 * Return the resulting string after removing exactly one occurrence of digit from number such that
 * the value of the resulting string in decimal form is maximized. The test cases are generated such
 * that digit occurs at least once in number.
 */

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
  let result = '';

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      const candidate = number.slice(0, i) + number.slice(i + 1);
      if (candidate > result) {
        result = candidate;
      }
    }
  }

  return result;
};
