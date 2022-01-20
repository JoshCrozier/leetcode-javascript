/**
 * 1528. Shuffle String
 * https://leetcode.com/problems/shuffle-string/
 * Difficulty: Easy
 *
 * You are given a string s and an integer array indices of the same length.
 * The string s will be shuffled such that the character at the ith position
 * moves to indices[i] in the shuffled string.
 *
 * Return the shuffled string.
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  return indices.reduce((result, index, offset) => {
    result[index] = s[offset];
    return result;
  }, new Array(indices.length)).join('');
};
