/**
 * 493. Reverse Pairs
 * https://leetcode.com/problems/reverse-pairs/
 * Difficulty: Hard
 *
 * Given an integer array nums, return the number of reverse pairs in the array.
 *
 * A reverse pair is a pair (i, j) where:
 * - 0 <= i < j < nums.length and
 * - nums[i] > 2 * nums[j].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let count = 0;
  mergeSort(nums, 0, nums.length - 1);
  return count;

  function mergeSort(input, left, right) {
    if (left >= right) return;
    const middle = Math.floor((left + right) / 2);
    mergeSort(input, left, middle);
    mergeSort(input, middle + 1, right);
    merge(input, left, middle, right);
  }

  function merge(input, left, middle, right) {
    let j = middle + 1;
    for (let i = left; i <= middle; i++) {
      while (j <= right && input[i] > 2 * input[j]) {
        j++;
      }
      count += j - (middle + 1);
    }

    const order = [];
    let i = left;
    j = middle + 1;
    while (i <= middle && j <= right) {
      if (input[i] <= input[j]) {
        order.push(input[i++]);
      } else {
        order.push(input[j++]);
      }
    }
    while (i <= middle) {
      order.push(input[i++]);
    }
    while (j <= right) {
      order.push(input[j++]);
    }
    for (let k = 0; k < order.length; k++) {
      input[left + k] = order[k];
    }
  }
};
