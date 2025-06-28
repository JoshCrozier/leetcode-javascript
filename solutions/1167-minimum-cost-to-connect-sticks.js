/**
 * 1167. Minimum Cost to Connect Sticks
 * https://leetcode.com/problems/minimum-cost-to-connect-sticks/
 * Difficulty: Medium
 *
 * You have some number of sticks with positive integer lengths. These lengths are given as
 * an array sticks, where sticks[i] is the length of the ith stick.
 *
 * You can connect any two sticks of lengths x and y into one stick by paying a cost of x + y.
 * You must connect all the sticks until there is only one stick remaining.
 *
 * Return the minimum cost of connecting all the given sticks into one stick in this way.
 */

/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
  const minHeap = [...sticks].sort((a, b) => a - b);
  let result = 0;

  while (minHeap.length > 1) {
    const first = minHeap.shift();
    const second = minHeap.shift();
    const combinedCost = first + second;

    result += combinedCost;

    let insertIndex = 0;
    while (insertIndex < minHeap.length && minHeap[insertIndex] < combinedCost) {
      insertIndex++;
    }
    minHeap.splice(insertIndex, 0, combinedCost);
  }

  return result;
};
