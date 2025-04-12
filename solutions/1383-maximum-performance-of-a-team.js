/**
 * 1383. Maximum Performance of a Team
 * https://leetcode.com/problems/maximum-performance-of-a-team/
 * Difficulty: Hard
 *
 * You are given two integers n and k and two integer arrays speed and efficiency both of length n.
 * There are n engineers numbered from 1 to n. speed[i] and efficiency[i] represent the speed and
 * efficiency of the ith engineer respectively.
 *
 * Choose at most k different engineers out of the n engineers to form a team with the maximum
 * performance.
 *
 * The performance of a team is the sum of its engineers' speeds multiplied by the minimum
 * efficiency among its engineers.
 *
 * Return the maximum performance of this team. Since the answer can be a huge number, return it
 * modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
  const engineers = Array.from({ length: n }, (_, i) => [efficiency[i], speed[i]])
    .sort((a, b) => b[0] - a[0]);
  const speedHeap = [];
  let totalSpeed = 0n;
  let maxPerf = 0n;
  const MOD = 1000000007n;

  function insertSpeed(val) {
    speedHeap.push(val);
    let i = speedHeap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (speedHeap[parent] <= speedHeap[i]) break;
      [speedHeap[i], speedHeap[parent]] = [speedHeap[parent], speedHeap[i]];
      i = parent;
    }
  }

  function removeMinSpeed() {
    const min = speedHeap[0];
    speedHeap[0] = speedHeap.pop();
    let i = 0;
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;
      if (left < speedHeap.length && speedHeap[left] < speedHeap[smallest]) {
        smallest = left;
      }
      if (right < speedHeap.length && speedHeap[right] < speedHeap[smallest]) {
        smallest = right;
      }
      if (smallest === i) break;
      [speedHeap[i], speedHeap[smallest]] = [speedHeap[smallest], speedHeap[i]];
      i = smallest;
    }
    return min;
  }

  for (const [eff, spd] of engineers) {
    insertSpeed(spd);
    totalSpeed += BigInt(spd);

    if (speedHeap.length > k) {
      totalSpeed -= BigInt(removeMinSpeed());
    }

    maxPerf = maxPerf > totalSpeed * BigInt(eff) ? maxPerf : totalSpeed * BigInt(eff);
  }

  return Number(maxPerf % MOD);
};
