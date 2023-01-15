/**
 * 140. Word Break II
 * https://leetcode.com/problems/word-break-ii/
 * Difficulty: Hard
 *
 * Given a string s and a dictionary of strings wordDict, add spaces in s to
 * construct a sentence where each word is a valid dictionary word. Return
 * all such possible sentences in any order.
 *
 * Note that the same word in the dictionary may be reused multiple times in
 * the segmentation.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const result = [];
  backtrack(result, s, wordDict, '');
  return result;
};

function backtrack(result, s, wordDict, substr) {
  if (!s.length) {
    result.push(substr);
    return;
  }

  wordDict.forEach(word => {
    if (s.length >= word.length && word === s.substring(0, word.length)) {
      backtrack(
        result,
        s.substring(word.length),
        wordDict,
        substr.length ? `${substr} ${word}` : word,
      );
    }
  });
}
