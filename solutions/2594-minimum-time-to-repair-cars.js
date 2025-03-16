/**
 * 2594. Minimum Time to Repair Cars
 * https://leetcode.com/problems/minimum-time-to-repair-cars/
 * Difficulty: Medium
 *
 * You are given an integer array ranks representing the ranks of some mechanics. ranksi is the rank
 * of the ith mechanic. A mechanic with a rank r can repair n cars in r * n2 minutes.
 *
 * You are also given an integer cars representing the total number of cars waiting in the garage
 * to be repaired.
 *
 * Return the minimum time taken to repair all the cars.
 *
 * Note: All the mechanics can repair the cars simultaneously.
 */

/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
  let left = 1;
  let right = Math.min(...ranks) * cars * cars;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (verify(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;

  function verify(time) {
    let totalCars = 0;
    for (const rank of ranks) {
      totalCars += Math.floor(Math.sqrt(time / rank));
      if (totalCars >= cars) return true;
    }
    return false;
  }
};
