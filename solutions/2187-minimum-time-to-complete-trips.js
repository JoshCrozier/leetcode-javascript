/**
 * 2187. Minimum Time to Complete Trips
 * https://leetcode.com/problems/minimum-time-to-complete-trips/
 * Difficulty: Medium
 *
 * You are given an array time where time[i] denotes the time taken by the ith bus to complete
 * one trip.
 *
 * Each bus can make multiple trips successively; that is, the next trip can start immediately
 * after completing the current trip. Also, each bus operates independently; that is, the trips
 * of one bus do not influence the trips of any other bus.
 *
 * You are also given an integer totalTrips, which denotes the number of trips all buses should
 * make in total. Return the minimum time required for all buses to complete at least totalTrips
 * trips.
 */

/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
  let left = 1;
  let right = Math.min(...time) * totalTrips;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const trips = time.reduce((sum, t) => sum + Math.floor(mid / t), 0);

    if (trips >= totalTrips) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
