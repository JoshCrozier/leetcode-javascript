/**
 * 1552. Magnetic Force Between Two Balls
 * https://leetcode.com/problems/magnetic-force-between-two-balls/
 * Difficulty: Medium
 *
 * In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls
 * if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at
 * position[i], Morty has m balls and needs to distribute the balls into the baskets such that
 * the minimum magnetic force between any two balls is maximum.
 *
 * Rick stated that magnetic force between two different balls at positions x and y is |x - y|.
 *
 * Given the integer array position and the integer m. Return the required force.
 */

/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
  position.sort((a, b) => a - b);

  let left = 1;
  let right = position[position.length - 1] - position[0];
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canPlaceBalls(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;

  function canPlaceBalls(minForce) {
    let count = 1;
    let lastPos = position[0];

    for (let i = 1; i < position.length; i++) {
      if (position[i] - lastPos >= minForce) {
        count++;
        lastPos = position[i];
      }
    }

    return count >= m;
  }
};
