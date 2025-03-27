/**
 * 936. Stamping The Sequence
 * https://leetcode.com/problems/stamping-the-sequence/
 * Difficulty: Hard
 *
 * You are given two strings stamp and target. Initially, there is a string s of length
 * target.length with all s[i] == '?'.
 *
 * In one turn, you can place stamp over s and replace every letter in the s with the
 * corresponding letter from stamp.
 *
 * For example, if stamp = "abc" and target = "abcba", then s is "?????" initially.
 * In one turn you can:
 * - place stamp at index 0 of s to obtain "abc??",
 * - place stamp at index 1 of s to obtain "?abc?", or
 * - place stamp at index 2 of s to obtain "??abc".
 *
 * Note that stamp must be fully contained in the boundaries of s in order to stamp
 * (i.e., you cannot place stamp at index 3 of s).
 *
 * We want to convert s to target using at most 10 * target.length turns.
 *
 * Return an array of the index of the left-most letter being stamped at each turn. If we
 * cannot obtain target from s within 10 * target.length turns, return an empty array.
 */

/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
  const stampLength = stamp.length;
  const targetLength = target.length;
  const moves = [];
  const targetArray = target.split('');
  let totalReplaced = 0;

  function tryStampAt(position) {
    let canStamp = false;
    let hasUnstamped = false;

    for (let i = 0; i < stampLength; i++) {
      const currentChar = targetArray[position + i];
      if (currentChar === '?') continue;
      if (currentChar !== stamp[i]) return false;
      hasUnstamped = true;
    }

    if (hasUnstamped) {
      for (let i = 0; i < stampLength; i++) {
        if (targetArray[position + i] !== '?') {
          targetArray[position + i] = '?';
          totalReplaced++;
        }
      }
      canStamp = true;
    }

    return canStamp;
  }

  const maxMoves = 10 * targetLength;
  while (moves.length <= maxMoves) {
    let madeChange = false;
    for (let i = 0; i <= targetLength - stampLength; i++) {
      if (tryStampAt(i)) {
        moves.push(i);
        madeChange = true;
        break;
      }
    }
    if (!madeChange) break;
    if (totalReplaced === targetLength) return moves.reverse();
  }

  return [];
};
