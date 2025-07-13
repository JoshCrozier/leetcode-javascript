/**
 * 2604. Minimum Time to Eat All Grains
 * https://leetcode.com/problems/minimum-time-to-eat-all-grains/
 * Difficulty: Hard
 *
 * There are n hens and m grains on a line. You are given the initial positions of the hens
 * and the grains in two integer arrays hens and grains of size n and m respectively.
 *
 * Any hen can eat a grain if they are on the same position. The time taken for this is
 * negligible. One hen can also eat multiple grains.
 *
 * In 1 second, a hen can move right or left by 1 unit. The hens can move simultaneously
 * and independently of each other.
 *
 * Return the minimum time to eat all grains if the hens act optimally.
 */

/**
 * @param {number[]} hens
 * @param {number[]} grains
 * @return {number}
 */
var minimumTime = function(hens, grains) {
  hens.sort((a, b) => a - b);
  grains.sort((a, b) => a - b);

  let minTime = 0;
  let maxTime = 2 * (Math.max(
    grains[grains.length - 1],
    hens[hens.length - 1]) - Math.min(grains[0], hens[0]
  ));

  while (minTime < maxTime) {
    const midTime = Math.floor((minTime + maxTime) / 2);
    if (isTimeReachable(midTime)) {
      maxTime = midTime;
    } else {
      minTime = midTime + 1;
    }
  }

  return minTime;

  function isTimeReachable(time) {
    let currentGrainIndex = 0;

    for (const currentHenPosition of hens) {
      let maximumRightReach = time;

      if (grains[currentGrainIndex] < currentHenPosition) {
        const costToReachLeftmost = currentHenPosition - grains[currentGrainIndex];
        if (costToReachLeftmost > time) return false;

        maximumRightReach = Math.max(
          0,
          time - 2 * costToReachLeftmost, Math.floor((time - costToReachLeftmost) / 2)
        );
      }

      if (currentHenPosition + maximumRightReach >= grains[currentGrainIndex]) {
        const farthestReachablePosition = currentHenPosition + maximumRightReach;
        while (currentGrainIndex < grains.length
              && grains[currentGrainIndex] <= farthestReachablePosition) {
          currentGrainIndex++;
        }
        if (currentGrainIndex === grains.length) return true;
      }
    }

    return false;
  }
};
