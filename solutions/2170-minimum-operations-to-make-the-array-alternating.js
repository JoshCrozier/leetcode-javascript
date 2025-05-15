/**
 * 2170. Minimum Operations to Make the Array Alternating
 * https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array nums consisting of n positive integers.
 *
 * The array nums is called alternating if:
 * - nums[i - 2] == nums[i], where 2 <= i <= n - 1.
 * - nums[i - 1] != nums[i], where 1 <= i <= n - 1.
 *
 * In one operation, you can choose an index i and change nums[i] into any positive integer.
 *
 * Return the minimum number of operations required to make the array alternating.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  const evenFreq = new Map();
  const oddFreq = new Map();

  if (nums.length <= 1) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evenFreq.set(nums[i], (evenFreq.get(nums[i]) || 0) + 1);
    } else {
      oddFreq.set(nums[i], (oddFreq.get(nums[i]) || 0) + 1);
    }
  }

  const evenTop = [...evenFreq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 2);
  const oddTop = [...oddFreq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 2);
  const evenTotal = Math.ceil(nums.length / 2);
  const oddTotal = Math.floor(nums.length / 2);
  let minOps = nums.length;

  for (const [evenNum, evenCount] of evenTop.length ? evenTop : [[0, 0]]) {
    for (const [oddNum, oddCount] of oddTop.length ? oddTop : [[0, 0]]) {
      if (evenNum !== oddNum || evenNum === 0) {
        minOps = Math.min(minOps, (evenTotal - evenCount) + (oddTotal - oddCount));
      }
    }
  }

  return minOps === nums.length ? Math.min(evenTotal, oddTotal) : minOps;
};
