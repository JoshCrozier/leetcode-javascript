/**
 * 1066. Campus Bikes II
 * https://leetcode.com/problems/campus-bikes-ii/
 * Difficulty: Medium
 *
 * On a campus represented as a 2D grid, there are n workers and m bikes, with n <= m.
 * Each worker and bike is a 2D coordinate on this grid.
 *
 * We assign one unique bike to each worker so that the sum of the Manhattan distances
 * between each worker and their assigned bike is minimized.
 *
 * Return the minimum possible sum of Manhattan distances between each worker and their
 * assigned bike.
 *
 * The Manhattan distance between two points p1 and p2 is
 * Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|.
 */

/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function(workers, bikes) {
  const n = workers.length;
  const m = bikes.length;
  const memo = new Map();

  return dfs(0, 0);

  function getDistance(worker, bike) {
    return Math.abs(workers[worker][0] - bikes[bike][0])
      + Math.abs(workers[worker][1] - bikes[bike][1]);
  }

  function dfs(workerIndex, usedBikes) {
    if (workerIndex === n) return 0;

    const key = `${workerIndex}-${usedBikes}`;
    if (memo.has(key)) return memo.get(key);

    let minDistance = Infinity;

    for (let bikeIndex = 0; bikeIndex < m; bikeIndex++) {
      if ((usedBikes & (1 << bikeIndex)) === 0) {
        const distance = getDistance(workerIndex, bikeIndex)
          + dfs(workerIndex + 1, usedBikes | (1 << bikeIndex));
        minDistance = Math.min(minDistance, distance);
      }
    }

    memo.set(key, minDistance);
    return minDistance;
  }
};
