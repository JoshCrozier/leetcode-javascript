/**
 * 3506. Find Time Required to Eliminate Bacterial Strains
 * https://leetcode.com/problems/find-time-required-to-eliminate-bacterial-strains/
 * Difficulty: Hard
 *
 * You are given an integer array timeReq and an integer splitTime.
 *
 * In the microscopic world of the human body, the immune system faces an extraordinary
 * challenge: combatting a rapidly multiplying bacterial colony that threatens the body's survival.
 *
 * Initially, only one white blood cell (WBC) is deployed to eliminate the bacteria. However, the
 * lone WBC quickly realizes it cannot keep up with the bacterial growth rate.
 *
 * The WBC devises a clever strategy to fight the bacteria:
 * - The ith bacterial strain takes timeReq[i] units of time to be eliminated.
 * - A single WBC can eliminate only one bacterial strain. Afterwards, the WBC is exhausted and
 *   cannot perform any other tasks.
 * - A WBC can split itself into two WBCs, but this requires splitTime units of time. Once split,
 *   the two WBCs can work in parallel on eliminating the bacteria.
 * - Only one WBC can work on a single bacterial strain. Multiple WBCs cannot attack one strain
 *   in parallel.
 *
 * You must determine the minimum time required to eliminate all the bacterial strains.
 *
 * Note that the bacterial strains can be eliminated in any order.
 */

/**
 * @param {number[]} timeReq
 * @param {number} splitTime
 * @return {number}
 */
var minEliminationTime = function(timeReq, splitTime) {
  const heap = new PriorityQueue((a, b) => a - b);

  for (const time of timeReq) {
    heap.enqueue(time);
  }

  heap.dequeue();

  let result = 0;
  while (!heap.isEmpty()) {
    const bacteria = splitTime + heap.dequeue();
    if (!heap.isEmpty()) {
      heap.enqueue(bacteria);
      result = heap.dequeue();
    } else {
      result = bacteria;
    }
  }

  return result;
};
