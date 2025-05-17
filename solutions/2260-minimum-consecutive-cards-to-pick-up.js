/**
 * 2260. Minimum Consecutive Cards to Pick Up
 * https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/
 * Difficulty: Medium
 *
 * You are given an integer array cards where cards[i] represents the value of the ith card. A pair
 * of cards are matching if the cards have the same value.
 *
 * Return the minimum number of consecutive cards you have to pick up to have a pair of matching
 * cards among the picked cards. If it is impossible to have matching cards, return -1.
 */

/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
  const map = new Map();
  let minLength = Infinity;

  for (let i = 0; i < cards.length; i++) {
    if (map.has(cards[i])) {
      minLength = Math.min(minLength, i - map.get(cards[i]) + 1);
    }
    map.set(cards[i], i);
  }

  return minLength === Infinity ? -1 : minLength;
};
