/**
 * 2938. Separate Black and White Balls
 * https://leetcode.com/problems/separate-black-and-white-balls/
 * Difficulty: Medium
 *
 * There are n balls on a table, each ball has a color black or white.
 *
 * You are given a 0-indexed binary string s of length n, where 1 and 0 represent black and white
 * balls, respectively.
 *
 * In each step, you can choose two adjacent balls and swap them.
 *
 * Return the minimum number of steps to group all the black balls to the right and all the white
 * balls to the left.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
  let result = 0;
  let whiteCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      result += i - whiteCount;
      whiteCount++;
    }
  }

  return result;
};
