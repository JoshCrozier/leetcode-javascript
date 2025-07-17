/**
 * 3135. Equalize Strings by Adding or Removing Characters at Ends
 * https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/
 * Difficulty: Medium
 *
 * Given two strings initial and target, your task is to modify initial by performing a series
 * of operations to make it equal to target.
 *
 * In one operation, you can add or remove one character only at the beginning or the end of
 * the string initial.
 *
 * Return the minimum number of operations required to transform initial into target.
 */

/**
 * @param {string} initial
 * @param {string} target
 * @return {number}
 */
var minOperations = function(initial, target) {
  const initialLength = initial.length;
  const targetLength = target.length;
  let previousRow = new Array(targetLength).fill(0);
  let maxCommonSubsequence = 0;

  for (let i = 0; i < initialLength; i++) {
    const currentRow = new Array(targetLength).fill(0);

    for (let j = 0; j < targetLength; j++) {
      if (initial[i] === target[j]) {
        currentRow[j] = 1 + (j - 1 >= 0 ? previousRow[j - 1] : 0);
        maxCommonSubsequence = Math.max(maxCommonSubsequence, currentRow[j]);
      }
    }

    previousRow = currentRow;
  }

  return initialLength + targetLength - 2 * maxCommonSubsequence;
};
