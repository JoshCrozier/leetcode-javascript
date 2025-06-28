/**
 * 1215. Stepping Numbers
 * https://leetcode.com/problems/stepping-numbers/
 * Difficulty: Medium
 *
 * A stepping number is an integer such that all of its adjacent digits have an absolute
 * difference of exactly 1.
 * - For example, 321 is a stepping number while 421 is not.
 *
 * Given two integers low and high, return a sorted list of all the stepping numbers in the
 * inclusive range [low, high].
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var countSteppingNumbers = function(low, high) {
  const result = [];

  if (low === 0) result.push(0);

  const minLength = low.toString().length;
  const maxLength = high.toString().length;

  for (let length = minLength; length <= maxLength; length++) {
    for (let start = 1; start <= 9; start++) {
      dfs(start.toString(), length);
    }
  }

  return result.sort((a, b) => a - b);

  function dfs(current, targetLength) {
    if (current.length === targetLength) {
      const num = parseInt(current);
      if (num >= low && num <= high) {
        result.push(num);
      }
      return;
    }

    const lastDigit = parseInt(current[current.length - 1]);

    if (lastDigit > 0) {
      dfs(current + (lastDigit - 1), targetLength);
    }
    if (lastDigit < 9) {
      dfs(current + (lastDigit + 1), targetLength);
    }
  }
};
