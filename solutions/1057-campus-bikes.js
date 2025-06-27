/**
 * 1057. Campus Bikes
 * https://leetcode.com/problems/campus-bikes/
 * Difficulty: Medium
 *
 * On a campus represented on the X-Y plane, there are n workers and m bikes, with n <= m.
 *
 * You are given an array workers of length n where workers[i] = [xi, yi] is the position of
 * the ith worker. You are also given an array bikes of length m where bikes[j] = [xj, yj]
 * is the position of the jth bike. All the given positions are unique.
 *
 * Assign a bike to each worker. Among the available bikes and workers, we choose the
 * (workeri, bikej) pair with the shortest Manhattan distance between each other and assign
 * the bike to that worker.
 *
 * If there are multiple (workeri, bikej) pairs with the same shortest Manhattan distance,
 * we choose the pair with the smallest worker index. If there are multiple ways to do that,
 * we choose the pair with the smallest bike index. Repeat this process until there are no
 * available workers.
 *
 * Return an array answer of length n, where answer[i] is the index (0-indexed) of the bike
 * that the ith worker is assigned to.
 *
 * The Manhattan distance between two points p1 and p2 is
 * Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|.
 */

/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
  const distances = [];

  for (let i = 0; i < workers.length; i++) {
    for (let j = 0; j < bikes.length; j++) {
      const distance = Math.abs(
        workers[i][0] - bikes[j][0]) + Math.abs(workers[i][1] - bikes[j][1]
      );
      distances.push([distance, i, j]);
    }
  }

  distances.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[2] - b[2];
  });

  const result = new Array(workers.length);
  const usedBikes = new Set();
  const assignedWorkers = new Set();

  for (const [distance, workerIndex, bikeIndex] of distances) {
    if (!assignedWorkers.has(workerIndex) && !usedBikes.has(bikeIndex)) {
      result[workerIndex] = bikeIndex;
      assignedWorkers.add(workerIndex);
      usedBikes.add(bikeIndex);
    }
  }

  return result;
};
