/**
 * 875. Koko Eating Bananas
 * https://leetcode.com/problems/koko-eating-bananas/
 * Difficulty: Medium
 *
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
 * The guards have gone and will come back in h hours.
 *
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of
 * bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats
 * all of them instead and will not eat any more bananas during this hour.
 *
 * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards
 * return.
 *
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  const fn = speed => piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);
  let min = 1;
  let max = Math.max(...piles);
  let result = max;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);

    if (fn(middle) <= h) {
      result = middle;
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }

  return result;
};
