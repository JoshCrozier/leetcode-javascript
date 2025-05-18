/**
 * 2287. Rearrange Characters to Make Target String
 * https://leetcode.com/problems/rearrange-characters-to-make-target-string/
 * Difficulty: Easy
 *
 * You are given two 0-indexed strings s and target. You can take some letters from s and
 * rearrange them to form new strings.
 *
 * Return the maximum number of copies of target that can be formed by taking letters from
 * s and rearranging them.
 */

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
  const sourceFreq = new Array(26).fill(0);
  const targetFreq = new Array(26).fill(0);

  for (const char of s) {
    sourceFreq[char.charCodeAt(0) - 97]++;
  }

  for (const char of target) {
    targetFreq[char.charCodeAt(0) - 97]++;
  }

  let result = Infinity;
  for (let i = 0; i < 26; i++) {
    if (targetFreq[i] > 0) {
      result = Math.min(result, Math.floor(sourceFreq[i] / targetFreq[i]));
    }
  }

  return result;
};
