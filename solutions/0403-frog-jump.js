/**
 * 403. Frog Jump
 * https://leetcode.com/problems/frog-jump/
 * Difficulty: Hard
 *
 * A frog is crossing a river. The river is divided into some number of units, and at each
 * unit, there may or may not exist a stone. The frog can jump on a stone, but it must not
 * jump into the water.
 *
 * Given a list of stones positions (in units) in sorted ascending order, determine if the
 * frog can cross the river by landing on the last stone. Initially, the frog is on the
 * first stone and assumes the first jump must be 1 unit.
 *
 * If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1
 * units. The frog can only jump in the forward direction.
 */

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  const dp = new Map();
  stones.forEach(stone => dp.set(stone, new Set()));
  dp.get(0).add(0);

  for (let i = 0; i < stones.length; i++) {
    const curr = stones[i];
    for (const prevJump of dp.get(curr)) {
      for (const jump of [prevJump - 1, prevJump, prevJump + 1]) {
        if (jump > 0 && dp.has(curr + jump)) {
          dp.get(curr + jump).add(jump);
        }
      }
    }
  }

  return dp.get(stones[stones.length - 1]).size > 0;
};
