/**
 * 955. Delete Columns to Make Sorted II
 * https://leetcode.com/problems/delete-columns-to-make-sorted-ii/
 * Difficulty: Medium
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
 * array has its elements in lexicographic order (i.e., strs[0] <= strs[1] <= strs[2]
 * <= ... <= strs[n - 1]). Return the minimum possible value of answer.length.
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  let previousSorted = new Array(strs.length).fill('');
  let result = 0;

  for (let col = 0; col < strs[0].length; col++) {
    const currentSorted = previousSorted.slice();
    let isValid = true;

    for (let row = 0; row < strs.length; row++) {
      currentSorted[row] += strs[row][col];
      if (row > 0 && currentSorted[row] < currentSorted[row - 1]) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      previousSorted = currentSorted;
    } else {
      result++;
    }
  }

  return result;
};
