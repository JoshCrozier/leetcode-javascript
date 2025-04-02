/**
 * 1046. Last Stone Weight
 * https://leetcode.com/problems/last-stone-weight/
 * Difficulty: Easy
 *
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 *
 * We are playing a game with the stones. On each turn, we choose the heaviest two stones and
 * smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The
 * result of this smash is:
 * - If x == y, both stones are destroyed, and
 * - If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 *
 * At the end of the game, there is at most one stone left.
 *
 * Return the weight of the last remaining stone. If there are no stones left, return 0.
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  const heap = stones.sort((a, b) => b - a);

  while (heap.length > 1) {
    const heaviest = heap.shift();
    const secondHeaviest = heap.shift();
    if (heaviest !== secondHeaviest) {
      heap.push(heaviest - secondHeaviest);
      heap.sort((a, b) => b - a);
    }
  }

  return heap.length ? heap[0] : 0;
};
