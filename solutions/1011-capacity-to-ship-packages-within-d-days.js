/**
 * 1011. Capacity To Ship Packages Within D Days
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 * Difficulty: Medium
 *
 * A conveyor belt has packages that must be shipped from one port to another within days days.
 *
 * The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship
 * with packages on the conveyor belt (in the order given by weights). We may not load more weight
 * than the maximum weight capacity of the ship.
 *
 * Return the least weight capacity of the ship that will result in all the packages on the conveyor
 * belt being shipped within days days.
 */

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((sum, weight) => sum + weight, 0);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let currentDays = 1;
    let currentWeight = 0;

    for (const weight of weights) {
      if (currentWeight + weight > mid) {
        currentDays++;
        currentWeight = weight;
      } else {
        currentWeight += weight;
      }
    }

    if (currentDays > days) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
