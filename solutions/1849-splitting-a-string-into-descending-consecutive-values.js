/**
 * 1849. Splitting a String Into Descending Consecutive Values
 * https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/
 * Difficulty: Medium
 *
 * You are given a string s that consists of only digits.
 *
 * Check if we can split s into two or more non-empty substrings such that the numerical values of
 * the substrings are in descending order and the difference between numerical values of every two
 * adjacent substrings is equal to 1.
 * - For example, the string s = "0090089" can be split into ["0090", "089"] with numerical values
 *   [90,89]. The values are in descending order and adjacent values differ by 1, so this way is
 *   valid.
 * - Another example, the string s = "001" can be split into ["0", "01"], ["00", "1"], or
 *   ["0", "0", "1"]. However all the ways are invalid because they have numerical values
 *   [0,1], [0,1], and [0,0,1] respectively, all of which are not in descending order.
 *
 * Return true if it is possible to split s as described above, or false otherwise.
 *
 * A substring is a contiguous sequence of characters in a string.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function(s) {
  let firstValue = 0;
  for (let i = 0; i < s.length - 1; i++) {
    firstValue = firstValue * 10 + parseInt(s[i]);
    if (trySplit(i + 1, firstValue)) return true;
  }

  return false;

  function trySplit(index, prevValue) {
    if (index === s.length) return true;

    let currentValue = 0;
    for (let i = index; i < s.length; i++) {
      currentValue = currentValue * 10 + parseInt(s[i]);
      if (currentValue >= prevValue) break;
      if (prevValue - currentValue === 1 && trySplit(i + 1, currentValue)) {
        return true;
      }
    }

    return false;
  }
};
