/**
 * 1199. Minimum Time to Build Blocks
 * https://leetcode.com/problems/minimum-time-to-build-blocks/
 * Difficulty: Hard
 *
 * You are given a list of blocks, where blocks[i] = t means that the i-th block needs
 * t units of time to be built. A block can only be built by exactly one worker.
 *
 * A worker can either split into two workers (number of workers increases by one) or
 * build a block then go home. Both decisions cost some time.
 *
 * The time cost of spliting one worker into two workers is given as an integer split.
 * Note that if two workers split at the same time, they split in parallel so the cost
 * would be split.
 *
 * Output the minimum time needed to build all blocks.
 *
 * Initially, there is only one worker.
 */

/**
 * @param {number[]} blocks
 * @param {number} split
 * @return {number}
 */
var minBuildTime = function(blocks, split) {
  const minHeap = new PriorityQueue((a, b) => a - b);

  for (const block of blocks) {
    minHeap.enqueue(block);
  }

  while (minHeap.size() > 1) {
    const first = minHeap.dequeue();
    const second = minHeap.dequeue();

    const mergedTime = split + Math.max(first, second);
    minHeap.enqueue(mergedTime);
  }

  return minHeap.dequeue();
};
