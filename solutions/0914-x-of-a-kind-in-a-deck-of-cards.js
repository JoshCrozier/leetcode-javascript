/**
 * 914. X of a Kind in a Deck of Cards
 * https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * Difficulty: Medium
 *
 * You are given an integer array deck where deck[i] represents the number written on the ith card.
 *
 * Partition the cards into one or more groups such that:
 * - Each group has exactly x cards where x > 1, and
 * - All the cards in one group have the same integer written on them.
 *
 * Return true if such partition is possible, or false otherwise.
 */

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  const gcd = (a, b) => !b ? a : gcd(b, a % b);
  const map = new Map();
  deck.forEach(n => map.set(n, (map.get(n) || 0) + 1));
  return [...map.values()].reduce(gcd) > 1;
};
