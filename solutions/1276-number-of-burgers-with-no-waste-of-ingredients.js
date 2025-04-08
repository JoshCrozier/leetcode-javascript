/**
 * 1276. Number of Burgers with No Waste of Ingredients
 * https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/
 * Difficulty: Medium
 *
 * Given two integers tomatoSlices and cheeseSlices. The ingredients of different burgers are
 * as follows:
 * - Jumbo Burger: 4 tomato slices and 1 cheese slice.
 * - Small Burger: 2 Tomato slices and 1 cheese slice.
 *
 * Return [total_jumbo, total_small] so that the number of remaining tomatoSlices equal to 0 and
 * the number of remaining cheeseSlices equal to 0. If it is not possible to make the remaining
 * tomatoSlices and cheeseSlices equal to 0 return [].
 */

/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
  const jumbo = Math.floor((tomatoSlices - 2 * cheeseSlices) / (4 - 2));
  const small = cheeseSlices - jumbo;

  if (jumbo < 0 || small < 0 || jumbo * 4 + small * 2 !== tomatoSlices) {
    return [];
  }

  return [jumbo, small];
};
