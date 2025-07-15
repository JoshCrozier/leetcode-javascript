/**
 * 2892. Minimizing Array After Replacing Pairs With Their Product
 * https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/
 * Difficulty: Medium
 *
 * Given an integer array nums and an integer k, you can perform the following operation on the
 * array any number of times:
 * - Select two adjacent elements of the array like x and y, such that x * y <= k, and replace
 *   both of them with a single element with value x * y (e.g. in one operation the array
 *   [1, 2, 2, 3] with k = 5 can become [1, 4, 3] or [2, 2, 3], but can't become [1, 2, 6]).
 *
 * Return the minimum possible length of nums after any number of operations.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minArrayLength = function(nums, k) {
  if (nums.some(num => num === 0)) {
    return 1;
  }

  const segments = [];
  let currentProduct = 1;
  let currentLength = 0;

  for (const num of nums) {
    if (num > k) {
      if (currentLength > 0) {
        segments.push(currentLength);
        currentProduct = 1;
        currentLength = 0;
      }
      segments.push(1);
    } else if (currentProduct * num <= k) {
      currentProduct *= num;
      currentLength++;
    } else {
      segments.push(currentLength);
      currentProduct = num;
      currentLength = 1;
    }
  }

  if (currentLength > 0) {
    segments.push(currentLength);
  }

  return segments.length;
};
