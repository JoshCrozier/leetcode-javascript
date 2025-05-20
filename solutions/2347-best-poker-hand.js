/**
 * 2347. Best Poker Hand
 * https://leetcode.com/problems/best-poker-hand/
 * Difficulty: Easy
 *
 * You are given an integer array ranks and a character array suits. You have 5 cards where the
 * ith card has a rank of ranks[i] and a suit of suits[i].
 *
 * The following are the types of poker hands you can make from best to worst:
 * 1. "Flush": Five cards of the same suit.
 * 2. "Three of a Kind": Three cards of the same rank.
 * 3. "Pair": Two cards of the same rank.
 * 4. "High Card": Any single card.
 *
 * Return a string representing the best type of poker hand you can make with the given cards.
 *
 * Note that the return values are case-sensitive.
 */

/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
  const suitCount = new Map();
  const rankCount = new Map();

  for (let i = 0; i < 5; i++) {
    suitCount.set(suits[i], (suitCount.get(suits[i]) || 0) + 1);
    rankCount.set(ranks[i], (rankCount.get(ranks[i]) || 0) + 1);
  }

  if (suitCount.size === 1) return 'Flush';

  const maxRankCount = Math.max(...rankCount.values());
  if (maxRankCount >= 3) return 'Three of a Kind';
  if (maxRankCount === 2) return 'Pair';

  return 'High Card';
};
