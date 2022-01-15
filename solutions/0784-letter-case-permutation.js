/**
 * 784. Letter Case Permutation
 * https://leetcode.com/problems/letter-case-permutation/
 * Difficulty: Medium
 *
 * Given a string s, you can transform every letter individually to be lowercase or uppercase
 * to create another string.
 *
 * Return a list of all possible strings we could create. Return the output in any order.
 */

/**
 * @param {string} str
 * @return {string[]}
 */
var letterCasePermutation = function(str) {
  const result = [];
  backtrack(result, str);
  return result;
};

function backtrack(result, input, permutation = '', offset = 0) {
  if (input.length === permutation.length) {
    result.push(permutation);
  } else {
    const target = input[offset];
    if (isNaN(target)) {
      [target.toLowerCase(), target.toUpperCase()].forEach(s => {
        backtrack(result, input, permutation + s, offset + 1);
      });
    } else {
      backtrack(result, input, permutation + target, offset + 1);
    }
  }
}
