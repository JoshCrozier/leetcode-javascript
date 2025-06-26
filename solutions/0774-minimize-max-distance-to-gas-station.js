/**
 * 774. Minimize Max Distance to Gas Station
 * https://leetcode.com/problems/minimize-max-distance-to-gas-station/
 * Difficulty: Hard
 *
 * You are given an integer array stations that represents the positions of the gas stations
 * on the x-axis. You are also given an integer k.
 *
 * You should add k new gas stations. You can add the stations anywhere on the x-axis, and
 * not necessarily on an integer position.
 *
 * Let penalty() be the maximum distance between adjacent gas stations after adding the k
 * new stations.
 *
 * Return the smallest possible value of penalty(). Answers within 10-6 of the actual answer
 * will be accepted.
 */

/**
 * @param {number[]} stations
 * @param {number} k
 * @return {number}
 */
var minmaxGasDist = function(stations, k) {
  const gaps = [];
  for (let i = 1; i < stations.length; i++) {
    gaps.push(stations[i] - stations[i - 1]);
  }

  let left = 0;
  let right = Math.max(...gaps);

  while (right - left > 1e-6) {
    const mid = (left + right) / 2;

    let stationsNeeded = 0;
    for (const gap of gaps) {
      stationsNeeded += Math.floor(gap / mid);
    }

    if (stationsNeeded <= k) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right;
};
