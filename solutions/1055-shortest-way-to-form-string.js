/**
 * 1055. Shortest Way to Form String
 * https://leetcode.com/problems/shortest-way-to-form-string/
 * Difficulty: Medium
 *
 * A subsequence of a string is a new string that is formed from the original string by deleting
 * some (can be none) of the characters without disturbing the relative positions of the remaining
 * characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * Given two strings source and target, return the minimum number of subsequences of source such
 * that their concatenation equals target. If the task is impossible, return -1.
 */

/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
  const sourceSet = new Set(source);

  for (const char of target) {
    if (!sourceSet.has(char)) {
      return -1;
    }
  }

  let subsequences = 0;
  let targetIndex = 0;

  while (targetIndex < target.length) {
    let sourceIndex = 0;
    const startTargetIndex = targetIndex;

    while (sourceIndex < source.length && targetIndex < target.length) {
      if (source[sourceIndex] === target[targetIndex]) {
        targetIndex++;
      }
      sourceIndex++;
    }

    if (targetIndex === startTargetIndex) {
      return -1;
    }

    subsequences++;
  }

  return subsequences;
};
