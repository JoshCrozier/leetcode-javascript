/**
 * 1144. Decrease Elements To Make Array Zigzag
 * https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/
 * Difficulty: Medium
 *
 * Given an array nums of integers, a move consists of choosing any element and decreasing it by 1.
 *
 * An array A is a zigzag array if either:
 * - Every even-indexed element is greater than adjacent elements, ie.
 *   A[0] > A[1] < A[2] > A[3] < A[4] > ...
 * - OR, every odd-indexed element is greater than adjacent elements, ie.
 *   A[0] < A[1] > A[2] < A[3] > A[4] < ...
 *
 * Return the minimum number of moves to transform the given array nums into a zigzag array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
  function calculateMoves(peakEven) {
    let moves = 0;
    const adjusted = [...nums];

    for (let i = 0; i < adjusted.length; i++) {
      if ((i % 2 === 0) === peakEven) {
        const left = i > 0 ? adjusted[i - 1] : Infinity;
        const right = i < adjusted.length - 1 ? adjusted[i + 1] : Infinity;
        const target = Math.min(left, right) - 1;
        if (adjusted[i] >= target) {
          moves += adjusted[i] - target;
          adjusted[i] = target;
        }
      }
    }

    return moves;
  }

  const evenPeaks = calculateMoves(true);
  const oddPeaks = calculateMoves(false);

  return Math.min(evenPeaks, oddPeaks);
};
