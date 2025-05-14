/**
 * 2135. Count Words Obtained After Adding a Letter
 * https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/
 * Difficulty: Medium
 *
 * You are given two 0-indexed arrays of strings startWords and targetWords. Each string consists
 * of lowercase English letters only.
 *
 * For each string in targetWords, check if it is possible to choose a string from startWords and
 * perform a conversion operation on it to be equal to that from targetWords.
 *
 * The conversion operation is described in the following two steps:
 * 1. Append any lowercase letter that is not present in the string to its end.
 *    - For example, if the string is "abc", the letters 'd', 'e', or 'y' can be added to it, but
 *      not 'a'. If 'd' is added, the resulting string will be "abcd".
 * 2. Rearrange the letters of the new string in any arbitrary order.
 *    - For example, "abcd" can be rearranged to "acbd", "bacd", "cbda", and so on. Note that it
 *      can also be rearranged to "abcd" itself.
 *
 * Return the number of strings in targetWords that can be obtained by performing the operations
 * on any string of startWords.
 *
 * Note that you will only be verifying if the string in targetWords can be obtained from a string
 * in startWords by performing the operations. The strings in startWords do not actually change
 * during this process.
 */

/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function(startWords, targetWords) {
  const sortedStartWords = new Set(startWords.map(word => [...word].sort().join('')));
  let result = 0;

  for (const target of targetWords) {
    const sortedTarget = [...target].sort().join('');
    for (let i = 0; i < target.length; i++) {
      const candidate = sortedTarget.slice(0, i) + sortedTarget.slice(i + 1);
      if (sortedStartWords.has(candidate)) {
        result++;
        break;
      }
    }
  }

  return result;
};
