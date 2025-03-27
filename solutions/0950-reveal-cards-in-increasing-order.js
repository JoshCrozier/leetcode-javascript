/**
 * 950. Reveal Cards In Increasing Order
 * https://leetcode.com/problems/reveal-cards-in-increasing-order/
 * Difficulty: Medium
 *
 * You are given an integer array deck. There is a deck of cards where every card has a
 * unique integer. The integer on the ith card is deck[i].
 *
 * You can order the deck in any order you want. Initially, all the cards start face down
 * (unrevealed) in one deck.
 *
 * You will do the following steps repeatedly until all cards are revealed:
 * 1. Take the top card of the deck, reveal it, and take it out of the deck.
 * 2. If there are still cards in the deck then put the next top card of the deck at the
 *    bottom of the deck.
 * 3. If there are still unrevealed cards, go back to step 1. Otherwise, stop.
 *
 * Return an ordering of the deck that would reveal the cards in increasing order.
 *
 * Note that the first entry in the answer is considered to be the top of the deck.
 */

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  deck.sort((a, b) => b - a);
  const result = [];

  for (const card of deck) {
    if (result.length) {
      result.unshift(result.pop());
    }
    result.unshift(card);
  }

  return result;
};
