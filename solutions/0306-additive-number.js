/**
 * 306. Additive Number
 * https://leetcode.com/problems/additive-number/
 * Difficulty: Medium
 *
 * An additive number is a string whose digits can form an additive sequence.
 *
 * A valid additive sequence should contain at least three numbers. Except for the first two
 * numbers, each subsequent number in the sequence must be the sum of the preceding two.
 *
 * Given a string containing only digits, return true if it is an additive number or false
 * otherwise.
 *
 * Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or
 * 1, 02, 3 is invalid.
 */

/**
 * @param {string} num
 * @param {Array} group
 * @param {number} startIndex
 * @return {boolean}
 */
var isAdditiveNumber = function(num, group = [], startIndex = 0) {
  if (startIndex === num.length && group.length >= 3) {
    return true;
  }

  for (let i = startIndex; i < num.length; i++) {
    if (num[startIndex] === '0' && i !== startIndex) {
      break;
    }
    const n = +num.slice(startIndex, i + 1);
    if (group[group.length - 1] + group[group.length - 2] !== n && group.length >= 2) {
      continue;
    }
    group.push(n);
    if (isAdditiveNumber(num, group, i + 1)) {
      return true;
    }
    group.pop();
  }

  return false;
};
