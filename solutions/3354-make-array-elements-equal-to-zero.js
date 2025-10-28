/**
 * 3354. Make Array Elements Equal to Zero
 * https://leetcode.com/problems/make-array-elements-equal-to-zero/
 * Difficulty: Easy
 *
 * You are given an integer array nums.
 *
 * Start by selecting a starting position curr such that nums[curr] == 0, and choose a movement
 * direction of either left or right.
 *
 * After that, you repeat the following process:
 * - If curr is out of the range [0, n - 1], this process ends.
 * - If nums[curr] == 0, move in the current direction by incrementing curr if you are moving
 *   right, or decrementing curr if you are moving left.
 * - Else if nums[curr] > 0:
 *   - Decrement nums[curr] by 1.
 *   - Reverse your movement direction (left becomes right and vice versa).
 *   - Take a step in your new direction.
 *
 * A selection of the initial position curr and movement direction is considered valid if
 * every element in nums becomes 0 by the end of the process.
 *
 * Return the number of possible valid selections.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (helper(i, -1)) result++;
      if (helper(i, 1)) result++;
    }
  }

  return result;

  function helper(startIndex, direction) {
    const arr = [...nums];
    let current = startIndex;
    let dir = direction;

    while (current >= 0 && current < n) {
      if (arr[current] === 0) {
        current += dir;
      } else {
        arr[current]--;
        dir = -dir;
        current += dir;
      }
    }

    return arr.every(val => val === 0);
  }
};
