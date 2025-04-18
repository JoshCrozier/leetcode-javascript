/**
 * 1540. Can Convert String in K Moves
 * https://leetcode.com/problems/can-convert-string-in-k-moves/
 * Difficulty: Medium
 *
 * Given two strings s and t, your goal is to convert s into t in k moves or less.
 *
 * During the ith (1 <= i <= k) move you can:
 * - Choose any index j (1-indexed) from s, such that 1 <= j <= s.length and j has not been chosen
 *   in any previous move, and shift the character at that index i times.
 * - Do nothing.
 *
 * Shifting a character means replacing it by the next letter in the alphabet (wrapping around so
 * that 'z' becomes 'a'). Shifting a character by i means applying the shift operations i times.
 *
 * Remember that any index j can be picked at most once.
 *
 * Return true if it's possible to convert s into t in no more than k moves, otherwise return false.
 */

/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var canConvertString = function(source, target, maxMoves) {
  if (source.length !== target.length) return false;
  const shiftCounts = new Array(26).fill(0);

  for (let i = 0; i < source.length; i++) {
    const shiftNeeded = (target.charCodeAt(i) - source.charCodeAt(i) + 26) % 26;
    if (shiftNeeded > 0) {
      shiftCounts[shiftNeeded]++;
    }
  }

  for (let shift = 1; shift < 26; shift++) {
    if (shiftCounts[shift] === 0) continue;
    const totalMoves = shift + 26 * (shiftCounts[shift] - 1);
    if (totalMoves > maxMoves) return false;
  }

  return true;
};
