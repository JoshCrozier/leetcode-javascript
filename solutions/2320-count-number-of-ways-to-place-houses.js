/**
 * 2320. Count Number of Ways to Place Houses
 * https://leetcode.com/problems/count-number-of-ways-to-place-houses/
 * Difficulty: Medium
 *
 * There is a street with n * 2 plots, where there are n plots on each side of the street. The plots
 * on each side are numbered from 1 to n. On each plot, a house can be placed.
 *
 * Return the number of ways houses can be placed such that no two houses are adjacent to each other
 * on the same side of the street. Since the answer may be very large, return it modulo 109 + 7.
 *
 * Note that if a house is placed on the ith plot on one side of the street, a house can also be
 * placed on the ith plot on the other side of the street.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function(n) {
  const MOD = 1e9 + 7;
  let empty = 1n;
  let house = 1n;

  for (let i = 2; i <= n; i++) {
    const nextEmpty = (empty + house) % BigInt(MOD);
    const nextHouse = empty;
    empty = nextEmpty;
    house = nextHouse;
  }

  const sideWays = (empty + house) % BigInt(MOD);
  return Number((sideWays * sideWays) % BigInt(MOD));
};
