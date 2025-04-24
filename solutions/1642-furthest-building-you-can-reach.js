/**
 * 1642. Furthest Building You Can Reach
 * https://leetcode.com/problems/furthest-building-you-can-reach/
 * Difficulty: Medium
 *
 * You are given an integer array heights representing the heights of buildings, some bricks,
 * and some ladders.
 *
 * You start your journey from building 0 and move to the next building by possibly using
 * bricks or ladders.
 *
 * While moving from building i to building i+1 (0-indexed):
 * - If the current building's height is greater than or equal to the next building's height,
 *   you do not need a ladder or bricks.
 * - If the current building's height is less than the next building's height, you can either
 *   use one ladder or (h[i+1] - h[i]) bricks.
 *
 * Return the furthest building index (0-indexed) you can reach if you use the given ladders
 * and bricks optimally.
 */

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
  const minHeap = new MinPriorityQueue();

  for (let i = 0; i < heights.length - 1; i++) {
    const climb = heights[i + 1] - heights[i];
    if (climb > 0) {
      minHeap.push(climb);
      if (minHeap.size() > ladders) {
        bricks -= minHeap.pop();
        if (bricks < 0) {
          return i;
        }
      }
    }
  }

  return heights.length - 1;
};

