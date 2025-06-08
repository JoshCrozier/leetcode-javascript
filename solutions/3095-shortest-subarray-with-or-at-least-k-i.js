/**
 * 3095. Shortest Subarray With OR at Least K I
 * https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/
 * Difficulty: Easy
 *
 * You are given an array nums of non-negative integers and an integer k.
 *
 * An array is called special if the bitwise OR of all of its elements is at least k.
 *
 * Return the length of the shortest special non-empty subarray of nums, or return -1 if
 * no special subarray exists.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
  if (k === 0) return 1;

  let minLength = Infinity;
  for (let start = 0; start < nums.length; start++) {
    let orResult = 0;
    for (let end = start; end < nums.length; end++) {
      orResult |= nums[end];
      if (orResult >= k) {
        minLength = Math.min(minLength, end - start + 1);
        break;
      }
    }
  }

  return minLength === Infinity ? -1 : minLength;
};
