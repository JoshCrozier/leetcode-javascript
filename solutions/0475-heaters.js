/**
 * 475. Heaters
 * https://leetcode.com/problems/heaters/
 * Difficulty: Medium
 *
 * Winter is coming! During the contest, your first job is to design a standard heater with
 * a fixed warm radius to warm all the houses.
 *
 * Every house can be warmed, as long as the house is within the heater's warm radius range.
 *
 * Given the positions of houses and heaters on a horizontal line, return the minimum radius
 * standard of heaters so that those heaters could cover all houses.
 *
 * Notice that all the heaters follow your radius standard, and the warm radius will the same.
 */

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  let result = 0;

  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < houses.length; i++) {
    while (j < heaters.length - 1 && houses[i] - heaters[j] > heaters[j + 1] - houses[i]) {
      j++;
    }
    result = Math.max(result, Math.abs(heaters[j] - houses[i]));
  }

  return result;
};
