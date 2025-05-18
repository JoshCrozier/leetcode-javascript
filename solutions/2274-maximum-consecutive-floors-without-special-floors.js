/**
 * 2274. Maximum Consecutive Floors Without Special Floors
 * https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/
 * Difficulty: Medium
 *
 * Alice manages a company and has rented some floors of a building as office space. Alice has
 * decided some of these floors should be special floors, used for relaxation only.
 *
 * You are given two integers bottom and top, which denote that Alice has rented all the floors
 * from bottom to top (inclusive). You are also given the integer array special, where special[i]
 * denotes a special floor that Alice has designated for relaxation.
 *
 * Return the maximum number of consecutive floors without a special floor.
 */

/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
  special.sort((a, b) => a - b);
  let result = Math.max(special[0] - bottom, top - special[special.length - 1]);

  for (let i = 1; i < special.length; i++) {
    result = Math.max(result, special[i] - special[i - 1] - 1);
  }

  return result;
};
