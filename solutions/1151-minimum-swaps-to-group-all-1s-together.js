/**
 * 1151. Minimum Swaps to Group All 1's Together
 * https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/
 * Difficulty: Medium
 *
 * Given a binary array data, return the minimum number of swaps required to group all
 * 1’s present in the array together in any place in the array.
 */

/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
  const totalOnes = data.reduce((sum, val) => sum + val, 0);

  if (totalOnes <= 1) return 0;

  let currentOnes = 0;
  for (let i = 0; i < totalOnes; i++) {
    currentOnes += data[i];
  }

  let maxOnes = currentOnes;

  for (let i = totalOnes; i < data.length; i++) {
    currentOnes = currentOnes - data[i - totalOnes] + data[i];
    maxOnes = Math.max(maxOnes, currentOnes);
  }

  return totalOnes - maxOnes;
};
