/**
 * 2188. Minimum Time to Finish the Race
 * https://leetcode.com/problems/minimum-time-to-finish-the-race/
 * Difficulty: Hard
 *
 * You are given a 0-indexed 2D integer array tires where tires[i] = [fi, ri] indicates that
 * the ith tire can finish its xth successive lap in fi * ri(x-1) seconds.
 * - For example, if fi = 3 and ri = 2, then the tire would finish its 1st lap in 3 seconds,
 *   its 2nd lap in 3 * 2 = 6 seconds, its 3rd lap in 3 * 22 = 12 seconds, etc.
 *
 * You are also given an integer changeTime and an integer numLaps.
 *
 * The race consists of numLaps laps and you may start the race with any tire. You have an
 * unlimited supply of each tire and after every lap, you may change to any given tire (including
 * the current tire type) if you wait changeTime seconds.
 *
 * Return the minimum time to finish the race.
 */

/**
 * @param {number[][]} tires
 * @param {number} changeTime
 * @param {number} numLaps
 * @return {number}
 */
var minimumFinishTime = function(tires, changeTime, numLaps) {
  const minTimes = new Array(18).fill(Infinity);
  const bestTime = new Array(numLaps + 1).fill(Infinity);

  for (const [baseTime, multiplier] of tires) {
    let currentTime = baseTime;
    let totalTime = baseTime;

    for (let lap = 1; lap <= Math.min(numLaps, 17); lap++) {
      if (currentTime > changeTime + baseTime) break;
      minTimes[lap] = Math.min(minTimes[lap], totalTime);
      currentTime *= multiplier;
      totalTime += currentTime;
    }
  }

  bestTime[0] = 0;

  for (let lap = 1; lap <= numLaps; lap++) {
    for (let prev = 1; prev <= Math.min(lap, 17); prev++) {
      if (minTimes[prev] !== Infinity) {
        bestTime[lap] = Math.min(
          bestTime[lap],
          bestTime[lap - prev] + minTimes[prev] + (lap === prev ? 0 : changeTime)
        );
      }
    }
  }

  return bestTime[numLaps];
};
