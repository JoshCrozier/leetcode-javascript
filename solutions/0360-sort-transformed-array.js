/**
 * 360. Sort Transformed Array
 * https://leetcode.com/problems/sort-transformed-array/
 * Difficulty: Medium
 *
 * Given a sorted integer array nums and three integers a, b and c, apply a quadratic function
 * of the form f(x) = ax2 + bx + c to each element nums[i] in the array, and return the array
 * in a sorted order.
 */

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let index = a >= 0 ? nums.length - 1 : 0;

  while (left <= right) {
    const leftVal = transform(nums[left]);
    const rightVal = transform(nums[right]);

    if (a >= 0) {
      if (leftVal > rightVal) {
        result[index--] = leftVal;
        left++;
      } else {
        result[index--] = rightVal;
        right--;
      }
    } else {
      if (leftVal < rightVal) {
        result[index++] = leftVal;
        left++;
      } else {
        result[index++] = rightVal;
        right--;
      }
    }
  }

  return result;

  function transform(x) {
    return a * x * x + b * x + c;
  }
};
