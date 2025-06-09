/**
 * 248. Strobogrammatic Number III
 * https://leetcode.com/problems/strobogrammatic-number-iii/
 * Difficulty: Hard
 *
 * Given two strings low and high that represent two integers low and high where low <= high,
 * return the number of strobogrammatic numbers in the range [low, high].
 *
 * A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked
 * at upside down).
 */

/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function(low, high) {
  const pairs = [
    ['0', '0'],
    ['1', '1'],
    ['6', '9'],
    ['8', '8'],
    ['9', '6']
  ];

  function generateStrobogrammatic(length, isOuter) {
    if (length === 0) return [''];
    if (length === 1) return ['0', '1', '8'];

    const result = [];
    const subNumbers = generateStrobogrammatic(length - 2, false);

    for (const [left, right] of pairs) {
      for (const sub of subNumbers) {
        if (isOuter && left === '0') continue;
        result.push(left + sub + right);
      }
    }

    return result;
  }

  function countInRange(num, lowVal, highVal) {
    if (num.length < lowVal.length || num.length > highVal.length) return false;
    if (num.length === lowVal.length && num < lowVal) return false;
    if (num.length === highVal.length && num > highVal) return false;
    return true;
  }

  let count = 0;
  const lowLength = low.length;
  const highLength = high.length;

  for (let len = lowLength; len <= highLength; len++) {
    const numbers = generateStrobogrammatic(len, true);
    for (const num of numbers) {
      if (countInRange(num, low, high)) {
        count++;
      }
    }
  }

  return count;
};
