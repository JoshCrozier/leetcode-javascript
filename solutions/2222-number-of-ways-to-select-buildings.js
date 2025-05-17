/**
 * 2222. Number of Ways to Select Buildings
 * https://leetcode.com/problems/number-of-ways-to-select-buildings/
 * Difficulty: Medium
 *
 * You are given a 0-indexed binary string s which represents the types of buildings along
 * a street where:
 * - s[i] = '0' denotes that the ith building is an office and
 * - s[i] = '1' denotes that the ith building is a restaurant.
 *
 * As a city official, you would like to select 3 buildings for random inspection. However, to
 * ensure variety, no two consecutive buildings out of the selected buildings can be of the same
 * type.
 * - For example, given s = "001101", we cannot select the 1st, 3rd, and 5th buildings as that
 *   would form "011" which is not allowed due to having two consecutive buildings of the same type.
 *
 * Return the number of valid ways to select 3 buildings.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
  const prefixCounts = [[0, 0]];
  let zeros = 0;
  let ones = 0;

  for (const char of s) {
    if (char === '0') zeros++;
    else ones++;
    prefixCounts.push([zeros, ones]);
  }

  let result = 0;
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '0') {
      const leftOnes = prefixCounts[i][1];
      const rightOnes = prefixCounts[s.length][1] - prefixCounts[i + 1][1];
      result += leftOnes * rightOnes;
    } else {
      const leftZeros = prefixCounts[i][0];
      const rightZeros = prefixCounts[s.length][0] - prefixCounts[i + 1][0];
      result += leftZeros * rightZeros;
    }
  }

  return result;
};
