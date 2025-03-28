/**
 * 960. Delete Columns to Make Sorted III
 * https://leetcode.com/problems/delete-columns-to-make-sorted-iii/
 * Difficulty: Hard
 *
 * You are given an array of n strings strs, all of the same length.
 *
 * We may choose any deletion indices, and we delete all the characters in those indices
 * for each string.
 *
 * For example, if we have strs = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then
 * the final array after deletions is ["bef", "vyz"].
 *
 * Suppose we chose a set of deletion indices answer such that after deletions, the final
 * array has every string (row) in lexicographic order. (i.e.,
 * (strs[0][0] <= strs[0][1] <= ... <= strs[0][strs[0].length - 1]),
 * and (strs[1][0] <= strs[1][1] <= ... <= strs[1][strs[1].length - 1]),
 * and so on). Return the minimum possible value of answer.length.
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  const isValid = (input, a, b) => input.every(row => row[a] <= row[b]);
  const cols = strs[0].length;
  const dp = new Array(cols).fill(1);

  for (let i = 1; i < cols; i++) {
    for (let j = 0; j < i; j++) {
      if (isValid(strs, j, i)) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return cols - Math.max(...dp);
};
