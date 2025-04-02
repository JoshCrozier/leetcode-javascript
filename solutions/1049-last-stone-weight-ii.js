/**
 * 1049. Last Stone Weight II
 * https://leetcode.com/problems/last-stone-weight-ii/
 * Difficulty: Medium
 *
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 *
 * We are playing a game with the stones. On each turn, we choose any two stones and smash
 * them together. Suppose the stones have weights x and y with x <= y. The result of this smash is:
 * - If x == y, both stones are destroyed, and
 * - If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 *
 * At the end of the game, there is at most one stone left.
 *
 * Return the smallest possible weight of the left stone. If there are no stones left, return 0.
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  const totalSum = stones.reduce((sum, weight) => sum + weight, 0);
  const target = Math.floor(totalSum / 2);
  const set = new Set([0]);

  for (const stone of stones) {
    const prev = new Set(set);
    for (const sum of prev) {
      if (sum + stone <= target) {
        set.add(sum + stone);
      }
    }
  }

  return totalSum - 2 * Math.max(...set);
};
