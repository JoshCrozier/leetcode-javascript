/**
 * 857. Minimum Cost to Hire K Workers
 * https://leetcode.com/problems/minimum-cost-to-hire-k-workers/
 * Difficulty: Hard
 *
 * There are n workers. You are given two integer arrays quality and wage where quality[i] is the
 * quality of the ith worker and wage[i] is the minimum wage expectation for the ith worker.
 *
 * We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must
 * pay them according to the following rules:
 * 1. Every worker in the paid group must be paid at least their minimum wage expectation.
 * 2. In the group, each worker's pay must be directly proportional to their quality. This means
 *    if a worker’s quality is double that of another worker in the group, then they must be paid
 *    twice as much as the other worker.
 *
 * Given the integer k, return the least amount of money needed to form a paid group satisfying
 * the above conditions. Answers within 10-5 of the actual answer will be accepted.
 */

/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
  const workers = quality.map((q, i) => ({ ratio: wage[i] / q, quality: q }))
    .sort((a, b) => a.ratio - b.ratio);

  let result = Infinity;
  let qualitySum = 0;
  const maxHeap = new MaxPriorityQueue();

  for (const worker of workers) {
    maxHeap.enqueue(worker.quality);
    qualitySum += worker.quality;

    if (maxHeap.size() > k) {
      qualitySum -= maxHeap.dequeue();
    }

    if (maxHeap.size() === k) {
      result = Math.min(result, qualitySum * worker.ratio);
    }
  }

  return result;
};
