/**
 * 568. Maximum Vacation Days
 * https://leetcode.com/problems/maximum-vacation-days/
 * Difficulty: Hard
 *
 * LeetCode wants to give one of its best employees the option to travel among n cities to collect
 * algorithm problems. But all work and no play makes Jack a dull boy, you could take vacations in
 * some particular cities and weeks. Your job is to schedule the traveling to maximize the number
 * of vacation days you could take, but there are certain rules and restrictions you need to follow.
 *
 * Rules and restrictions:
 * 1. You can only travel among n cities, represented by indexes from 0 to n - 1. Initially, you
 *    are in the city indexed 0 on Monday.
 * 2. The cities are connected by flights. The flights are represented as an n x n matrix (not
 *    necessarily symmetrical), called flights representing the airline status from the city i to
 *    the city j. If there is no flight from the city i to the city j, flights[i][j] == 0;
 *    Otherwise, flights[i][j] == 1. Also, flights[i][i] == 0 for all i.
 * 3. You totally have k weeks (each week has seven days) to travel. You can only take flights at
 *    most once per day and can only take flights on each week's Monday morning. Since flight time
 *    is so short, we do not consider the impact of flight time.
 * 4. For each city, you can only have restricted vacation days in different weeks, given an n x k
 *    matrix called days representing this relationship. For the value of days[i][j], it represents
 *    the maximum days you could take a vacation in the city i in the week j.
 * 5. You could stay in a city beyond the number of vacation days, but you should work on the extra
 *    days, which will not be counted as vacation days.
 * 6. If you fly from city A to city B and take the vacation on that day, the deduction towards
 *    vacation days will count towards the vacation days of city B in that week.
 * 7. We do not consider the impact of flight hours on the calculation of vacation days.
 *
 * Given the two matrices flights and days, return the maximum vacation days you could take during
 * k weeks.
 */

/**
 * @param {number[][]} flights
 * @param {number[][]} days
 * @return {number}
 */
var maxVacationDays = function(flights, days) {
  const cities = flights.length;
  const weeks = days[0].length;
  const dp = new Array(weeks + 1).fill().map(() => new Array(cities).fill(-Infinity));

  dp[0][0] = 0;

  for (let week = 1; week <= weeks; week++) {
    for (let currCity = 0; currCity < cities; currCity++) {
      for (let prevCity = 0; prevCity < cities; prevCity++) {
        if (dp[week - 1][prevCity] !== -Infinity
            && (flights[prevCity][currCity] || prevCity === currCity)) {
          dp[week][currCity] = Math.max(
            dp[week][currCity],
            dp[week - 1][prevCity] + days[currCity][week - 1]
          );
        }
      }
    }
  }

  return Math.max(0, ...dp[weeks]);
};
