/**
 * 2134. Minimum Swaps to Group All 1's Together II
 * https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/
 * Difficulty: Medium
 *
 * A swap is defined as taking two distinct positions in an array and swapping the values in them.
 *
 * A circular array is defined as an array where we consider the first element and the last element
 * to be adjacent.
 *
 * Given a binary circular array nums, return the minimum number of swaps required to group all
 * 1's present in the array together at any location.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
  const onesCount = nums.reduce((sum, num) => sum + num, 0);
  const n = nums.length;
  let result = Infinity;
  let currentZeros = 0;

  for (let i = 0; i < onesCount; i++) {
    if (nums[i] === 0) currentZeros++;
  }

  result = currentZeros;

  for (let i = 1; i < n; i++) {
    if (nums[(i - 1) % n] === 0) currentZeros--;
    if (nums[(i + onesCount - 1) % n] === 0) currentZeros++;
    result = Math.min(result, currentZeros);
  }

  return result;
};
