/**
 * 327. Count of Range Sum
 * https://leetcode.com/problems/count-of-range-sum/
 * Difficulty: Hard
 *
 * Given an integer array nums and two integers lower and upper, return the number of range
 * sums that lie in [lower, upper] inclusive.
 *
 * Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j
 * inclusive, where i <= j.
 */

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  const result = [0];
  for (let i = 0; i < nums.length; i++) {
    result.push(result[i] + nums[i]);
  }

  function mergeSort(input, left, right) {
    if (left >= right) return 0;
    const middle = Math.floor((left + right) / 2);
    let count = mergeSort(input, left, middle) + mergeSort(input, middle + 1, right);
    let i = left;
    let j = middle + 1;
    let k = middle + 1;

    while (i <= middle) {
      while (j <= right && input[j] - input[i] < lower) j++;
      while (k <= right && input[k] - input[i] <= upper) k++;
      count += k - j;
      i++;
    }

    const sorted = [];
    i = left;
    j = middle + 1;
    while (i <= middle || j <= right) {
      if (i > middle) sorted.push(input[j++]);
      else if (j > right) sorted.push(input[i++]);
      else if (input[i] <= input[j]) sorted.push(input[i++]);
      else sorted.push(input[j++]);
    }

    for (let i = 0; i < sorted.length; i++) {
      input[left + i] = sorted[i];
    }

    return count;
  }

  return mergeSort(result, 0, result.length - 1);
};
