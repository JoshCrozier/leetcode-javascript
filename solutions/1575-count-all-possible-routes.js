/**
 * 1575. Count All Possible Routes
 * https://leetcode.com/problems/count-all-possible-routes/
 * Difficulty: Hard
 *
 * You are given an array of distinct positive integers locations where locations[i] represents
 * the position of city i. You are also given integers start, finish and fuel representing the
 * starting city, ending city, and the initial amount of fuel you have, respectively.
 *
 * At each step, if you are at city i, you can pick any city j such that j != i and
 * 0 <= j < locations.length and move to city j. Moving from city i to city j reduces the
 * amount of fuel you have by |locations[i] - locations[j]|. Please notice that |x| denotes
 * the absolute value of x.
 *
 * Notice that fuel cannot become negative at any point in time, and that you are allowed to visit
 * any city more than once (including start and finish).
 *
 * Return the count of all possible routes from start to finish. Since the answer may be too large,
 * return it modulo 109 + 7.
 */

/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
  const MOD = 1e9 + 7;
  const memo = new Array(locations.length).fill().map(() => new Array(fuel + 1).fill(-1));

  function calculateRoutes(currentCity, remainingFuel) {
    if (remainingFuel < 0) return 0;
    if (memo[currentCity][remainingFuel] !== -1) return memo[currentCity][remainingFuel];

    let routes = currentCity === finish ? 1 : 0;

    for (let nextCity = 0; nextCity < locations.length; nextCity++) {
      if (nextCity !== currentCity) {
        const fuelCost = Math.abs(locations[currentCity] - locations[nextCity]);
        routes = (routes + calculateRoutes(nextCity, remainingFuel - fuelCost)) % MOD;
      }
    }

    memo[currentCity][remainingFuel] = routes;
    return routes;
  }

  return calculateRoutes(start, fuel);
};
