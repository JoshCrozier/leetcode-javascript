/**
 * 1956. Minimum Time For K Virus Variants to Spread
 * https://leetcode.com/problems/minimum-time-for-k-virus-variants-to-spread/
 * Difficulty: Hard
 *
 * There are n unique virus variants in an infinite 2D grid. You are given a 2D array points,
 * where points[i] = [xi, yi] represents a virus originating at (xi, yi) on day 0. Note that
 * it is possible for multiple virus variants to originate at the same point.
 *
 * Every day, each cell infected with a virus variant will spread the virus to all neighboring
 * points in the four cardinal directions (i.e. up, down, left, and right). If a cell has multiple
 * variants, all the variants will spread without interfering with each other.
 *
 * Given an integer k, return the minimum integer number of days for any point to contain at least
 * k of the unique virus variants.
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var minDayskVariants = function(points, k) {
  let left = 0;
  let right = 200;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;

  function check(day) {
    for (let x = 1; x <= 100; x++) {
      for (let y = 1; y <= 100; y++) {
        let count = 0;
        for (const [px, py] of points) {
          if (Math.abs(x - px) + Math.abs(y - py) <= day) {
            count++;
          }
        }
        if (count >= k) {
          return true;
        }
      }
    }
    return false;
  }
};
