/**
 * 548. Split Array with Equal Sum
 * https://leetcode.com/problems/split-array-with-equal-sum/
 * Difficulty: Hard
 *
 * Given an integer array nums of length n, return true if there is a triplet (i, j, k) which
 * satisfies the following conditions:
 * - 0 < i, i + 1 < j, j + 1 < k < n - 1
 * - The sum of subarrays (0, i - 1), (i + 1, j - 1), (j + 1, k - 1) and (k + 1, n - 1) is equal.
 *
 * A subarray (l, r) represents a slice of the original array starting from the element
 * indexed l to the element indexed r.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArray = function(nums) {
  const length = nums.length;
  if (length < 7) return false;

  const prefixSums = new Array(length + 1).fill(0);
  for (let i = 0; i < length; i++) {
    prefixSums[i + 1] = prefixSums[i] + nums[i];
  }

  const getSum = (start, end) => prefixSums[end + 1] - prefixSums[start];

  for (let j = 3; j < length - 3; j++) {
    const seenSums = new Set();
    for (let i = 1; i < j - 1; i++) {
      const firstSum = getSum(0, i - 1);
      const secondSum = getSum(i + 1, j - 1);
      if (firstSum === secondSum) {
        seenSums.add(firstSum);
      }
    }
    for (let k = j + 2; k < length - 1; k++) {
      const thirdSum = getSum(j + 1, k - 1);
      const fourthSum = getSum(k + 1, length - 1);
      if (thirdSum === fourthSum && seenSums.has(thirdSum)) {
        return true;
      }
    }
  }
  return false;
};
