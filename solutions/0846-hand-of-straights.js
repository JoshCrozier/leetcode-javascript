/**
 * 846. Hand of Straights
 * https://leetcode.com/problems/hand-of-straights/
 * Difficulty: Medium
 *
 * Alice has some number of cards and she wants to rearrange
 * the cards into groups so that each group is of size groupSize,
 * and consists of groupSize consecutive cards.
 *
 * Given an integer array hand where hand[i] is the value written
 * on the ith card and an integer groupSize, return true if she
 * can rearrange the cards, or false otherwise.
 */

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  if (hand.length % groupSize) {
    return false;
  }

  const map = {};
  const set = new Set(hand);
  hand.forEach(x => map[x] ? map[x]++ : map[x] = 1);

  let count = hand.length / groupSize;
  while (count--) {
    let min = Math.min(...set);
    for (let i = min; i < min + groupSize; i++) {
      if (!map[i]) {
        return false;
      }
      if (!--map[i]) {
        set.delete(i);
      }
    }
  }

  return true;
};
