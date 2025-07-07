/**
 * 2137. Pour Water Between Buckets to Make Water Levels Equal
 * https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/
 * Difficulty: Medium
 *
 * You have n buckets each containing some gallons of water in it, represented by a 0-indexed
 * integer array buckets, where the ith bucket contains buckets[i] gallons of water. You are
 * also given an integer loss.
 *
 * You want to make the amount of water in each bucket equal. You can pour any amount of water
 * from one bucket to another bucket (not necessarily an integer). However, every time you
 * pour k gallons of water, you spill loss percent of k.
 *
 * Return the maximum amount of water in each bucket after making the amount of water equal.
 * Answers within 10-5 of the actual answer will be accepted.
 */

/**
 * @param {number[]} buckets
 * @param {number} loss
 * @return {number}
 */
var equalizeWater = function(buckets, loss) {
  const n = buckets.length;
  const totalWater = buckets.reduce((sum, water) => sum + water, 0);
  const retentionRate = (100 - loss) / 100;

  let left = 0;
  let right = Math.max(...buckets);

  while (right - left > 1e-7) {
    const mid = (left + right) / 2;

    if (canAchieveLevel(mid)) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return left;

  function canAchieveLevel(targetLevel) {
    let surplus = 0;
    let deficit = 0;

    for (const water of buckets) {
      if (water > targetLevel) {
        surplus += water - targetLevel;
      } else {
        deficit += targetLevel - water;
      }
    }

    return surplus * retentionRate >= deficit;
  }
};
