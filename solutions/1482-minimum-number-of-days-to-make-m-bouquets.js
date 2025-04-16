/**
 * 1482. Minimum Number of Days to Make m Bouquets
 * https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/
 * Difficulty: Medium
 *
 * You are given an integer array bloomDay, an integer m and an integer k.
 *
 * You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the
 * garden.
 *
 * The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be
 * used in exactly one bouquet.
 *
 * Return the minimum number of days you need to wait to be able to make m bouquets from the garden.
 * If it is impossible to make m bouquets return -1.
 */

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1;

  let left = 1;
  let right = Math.max(...bloomDay);
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canMakeBouquets(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;

  function canMakeBouquets(days) {
    let bouquets = 0;
    let flowers = 0;
    for (const bloom of bloomDay) {
      if (bloom <= days) {
        flowers++;
        if (flowers === k) {
          bouquets++;
          flowers = 0;
        }
      } else {
        flowers = 0;
      }
    }
    return bouquets >= m;
  }
};
