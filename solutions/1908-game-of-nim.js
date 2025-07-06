/**
 * 1908. Game of Nim
 * https://leetcode.com/problems/game-of-nim/
 * Difficulty: Medium
 *
 * Alice and Bob take turns playing a game with Alice starting first.
 *
 * In this game, there are n piles of stones. On each player's turn, the player should remove
 * any positive number of stones from a non-empty pile of his or her choice. The first player
 * who cannot make a move loses, and the other player wins.
 *
 * Given an integer array piles, where piles[i] is the number of stones in the ith pile, return
 * true if Alice wins, or false if Bob wins.
 *
 * Both Alice and Bob play optimally.
 */

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var nimGame = function(piles) {
  const map = new Map();
  return helper(piles);

  function helper(currentPiles) {
    const key = currentPiles.join(',');
    if (map.has(key)) return map.get(key);

    if (currentPiles.every(pile => pile === 0)) {
      map.set(key, false);
      return false;
    }

    for (let i = 0; i < currentPiles.length; i++) {
      for (let take = 1; take <= currentPiles[i]; take++) {
        const nextPiles = [...currentPiles];
        nextPiles[i] -= take;

        if (!helper(nextPiles)) {
          map.set(key, true);
          return true;
        }
      }
    }

    map.set(key, false);
    return false;
  }
};
