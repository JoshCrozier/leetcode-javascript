/**
 * 777. Swap Adjacent in LR String
 * https://leetcode.com/problems/swap-adjacent-in-lr-string/
 * Difficulty: Medium
 *
 * In a string composed of 'L', 'R', and 'X' characters, like "RXXLRXRXL", a move consists of either
 * replacing one occurrence of "XL" with "LX", or replacing one occurrence of "RX" with "XR". Given
 * the starting string start and the ending string result, return True if and only if there exists
 * a sequence of moves to transform start to result.
 */

/**
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */
var canTransform = function(start, result) {
  if (start.replace(/X/g, '') !== result.replace(/X/g, '')) {
    return false;
  }

  let i = 0;
  let j = 0;
  const n = start.length;

  while (i < n && j < n) {
    while (i < n && start[i] === 'X') i++;
    while (j < n && result[j] === 'X') j++;

    if (i === n && j === n) return true;
    if (i === n || j === n) return false;

    if (start[i] !== result[j]) return false;

    if (start[i] === 'L' && i < j) return false;
    if (start[i] === 'R' && i > j) return false;

    i++;
    j++;
  }

  return true;
};
