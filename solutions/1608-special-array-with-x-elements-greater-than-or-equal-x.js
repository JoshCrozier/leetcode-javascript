/**
 * 1608. Special Array With X Elements Greater Than or Equal X
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
 * Difficulty: Easy
 *
 * You are given an array nums of non-negative integers. nums is considered special if there exists
 * a number x such that there are exactly x numbers in nums that are greater than or equal to x.
 *
 * Notice that x does not have to be an element in nums.
 *
 * Return x if the array is special, otherwise, return -1. It can be proven that if nums is special,
 * the value for x is unique.
 */

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
function specialArray(numbers) {
  numbers.sort((a, b) => b - a);
  let left = 0;
  let right = numbers.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid === 0 || numbers[mid - 1] >= mid) {
      if (mid === numbers.length || numbers[mid] < mid) {
        return mid;
      }
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
