/**
 * 871. Minimum Number of Refueling Stops
 * https://leetcode.com/problems/minimum-number-of-refueling-stops/
 * Difficulty: Hard
 *
 * A car travels from a starting position to a destination which is target miles east of the
 * starting position.
 *
 * There are gas stations along the way. The gas stations are represented as an array stations
 * where stations[i] = [positioni, fueli] indicates that the ith gas station is positioni miles
 * east of the starting position and has fueli liters of gas.
 *
 * The car starts with an infinite tank of gas, which initially has startFuel liters of fuel in
 * it. It uses one liter of gas per one mile that it drives. When the car reaches a gas station,
 * it may stop and refuel, transferring all the gas from the station into the car.
 *
 * Return the minimum number of refueling stops the car must make in order to reach its destination.
 * If it cannot reach the destination, return -1.
 *
 * Note that if the car reaches a gas station with 0 fuel left, the car can still refuel there.
 * If the car reaches the destination with 0 fuel left, it is still considered to have arrived.
 */

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  const dp = [startFuel];
  const stationCount = stations.length;

  for (let i = 0; i < stationCount; i++) {
    dp.push(0);
    for (let stops = i; stops >= 0; stops--) {
      if (dp[stops] >= stations[i][0]) {
        dp[stops + 1] = Math.max(dp[stops + 1], dp[stops] + stations[i][1]);
      }
    }
  }

  for (let stops = 0; stops <= stationCount; stops++) {
    if (dp[stops] >= target) return stops;
  }

  return -1;
};
