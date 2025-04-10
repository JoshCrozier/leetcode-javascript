/**
 * 2999. Count the Number of Powerful Integers
 * https://leetcode.com/problems/count-the-number-of-powerful-integers/
 * Difficulty: Hard
 *
 * You are given three integers start, finish, and limit. You are also given a 0-indexed string
 * s representing a positive integer.
 *
 * A positive integer x is called powerful if it ends with s (in other words, s is a suffix of x)
 * and each digit in x is at most limit.
 *
 * Return the total number of powerful integers in the range [start..finish].
 *
 * A string x is a suffix of a string y if and only if x is a substring of y that starts from
 * some index (including 0) in y and extends to the index y.length - 1. For example, 25 is a
 * suffix of 5125 whereas 512 is not.
 */

/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} suffix
 * @return {number}
 */
var numberOfPowerfulInt = function(start, finish, limit, suffix) {
  start--;
  const startCount = countValidNums(start, limit, suffix);
  const finishCount = countValidNums(finish, limit, suffix);
  return finishCount - startCount;

  function countValidNums(number, maxDigit, suffix) {
    const suffixNum = parseInt(suffix);
    const suffixMod = 10 ** suffix.length;
    const suffixPart = number % suffixMod;
    let baseNum = Math.floor(number / suffixMod);
    if (suffixPart < suffixNum) baseNum--;

    if (baseNum <= 0) return baseNum + 1;

    const digitStr = baseNum.toString();
    let count = digitStr.charCodeAt(0) - 48;
    let isExact = 1;

    if (count > maxDigit) {
      return (maxDigit + 1) ** digitStr.length;
    }

    for (let i = 1; i < digitStr.length; i++) {
      count *= (maxDigit + 1);
      if (isExact) {
        const currentDigit = digitStr.charCodeAt(i) - 48;
        if (currentDigit > maxDigit) {
          isExact = 0;
          count += maxDigit + 1;
        } else {
          count += currentDigit;
        }
      }
    }

    return count + isExact;
  }
};
