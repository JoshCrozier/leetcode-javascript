/**
 * 1927. Sum Game
 * https://leetcode.com/problems/sum-game/
 * Difficulty: Medium
 *
 * Alice and Bob take turns playing a game, with Alice starting first.
 *
 * You are given a string num of even length consisting of digits and '?' characters. On each
 * turn, a player will do the following if there is still at least one '?' in num:
 * 1. Choose an index i where num[i] == '?'.
 * 2. Replace num[i] with any digit between '0' and '9'.
 *
 * The game ends when there are no more '?' characters in num.
 *
 * For Bob to win, the sum of the digits in the first half of num must be equal to the sum of
 * the digits in the second half. For Alice to win, the sums must not be equal.
 * - For example, if the game ended with num = "243801", then Bob wins because 2+4+3 = 8+0+1.
 *   If the game ended with num = "243803", then Alice wins because 2+4+3 != 8+0+3.
 *
 * Assuming Alice and Bob play optimally, return true if Alice will win and false if Bob will win.
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
  const n = num.length;
  const half = n / 2;

  let leftSum = 0;
  let rightSum = 0;
  let leftQuestionMarks = 0;
  let rightQuestionMarks = 0;

  for (let i = 0; i < n; i++) {
    if (i < half) {
      if (num[i] === '?') {
        leftQuestionMarks++;
      } else {
        leftSum += parseInt(num[i]);
      }
    } else {
      if (num[i] === '?') {
        rightQuestionMarks++;
      } else {
        rightSum += parseInt(num[i]);
      }
    }
  }

  const sumDiff = leftSum - rightSum;
  const diff = leftQuestionMarks - rightQuestionMarks;

  return (diff % 2 !== 0) || (sumDiff + diff * 4.5 !== 0);
};
