/**
 * 247. Strobogrammatic Number II
 * https://leetcode.com/problems/strobogrammatic-number-ii/
 * Difficulty: Medium
 *
 * Given an integer n, return all the strobogrammatic numbers that are of length n. You may
 * return the answer in any order.
 *
 * A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked
 * at upside down).
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  const pairs = [
    ['0', '0'],
    ['1', '1'],
    ['6', '9'],
    ['8', '8'],
    ['9', '6']
  ];

  return generateStrobogrammatic(n, n);

  function generateStrobogrammatic(length, finalLength) {
    if (length === 0) return [''];
    if (length === 1) return ['0', '1', '8'];

    const result = [];
    const subNumbers = generateStrobogrammatic(length - 2, finalLength);
    for (const [left, right] of pairs) {
      for (const sub of subNumbers) {
        if (length === finalLength && left === '0') continue;
        result.push(left + sub + right);
      }
    }

    return result;
  }
};
