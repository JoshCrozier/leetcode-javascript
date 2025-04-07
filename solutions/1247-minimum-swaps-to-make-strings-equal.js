/**
 * 1247. Minimum Swaps to Make Strings Equal
 * https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/
 * Difficulty: Medium
 *
 * You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only.
 * Your task is to make these two strings equal to each other. You can swap any two characters
 * that belong to different strings, which means: swap s1[i] and s2[j].
 *
 * Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is
 * impossible to do so.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
function minimumSwap(s1, s2) {
  let xyCount = 0;
  let yxCount = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === 'x' && s2[i] === 'y') xyCount++;
    if (s1[i] === 'y' && s2[i] === 'x') yxCount++;
  }

  if ((xyCount + yxCount) % 2 !== 0) return -1;

  return Math.floor(xyCount / 2) + Math.floor(yxCount / 2) + (xyCount % 2) * 2;
}
