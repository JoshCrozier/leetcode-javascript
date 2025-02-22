/**
 * 321. Create Maximum Number
 * https://leetcode.com/problems/create-maximum-number/
 * Difficulty: Hard
 *
 * You are given two integer arrays nums1 and nums2 of lengths m and n respectively.
 * nums1 and nums2 represent the digits of two numbers. You are also given an integer k.
 *
 * Create the maximum number of length k <= m + n from digits of the two numbers. The
 * relative order of the digits from the same array must be preserved.
 *
 * Return an array of the k digits representing the answer.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  const m = nums1.length;
  const n = nums2.length;
  let result = new Array(k).fill(0);

  for (let i = Math.max(0, k - n); i <= Math.min(k, m); i++) {
    if (i + n < k) continue;
    const candidate = merge(
      getMaxSubsequence(nums1, i),
      getMaxSubsequence(nums2, k - i),
    );
    result = candidate > result ? candidate : result;
  }

  return result;

  function getMaxSubsequence(nums, count) {
    const stack = [];
    let removeIndex = nums.length - count;

    nums.forEach(n => {
      while (stack.length && stack[stack.length - 1] < n && removeIndex) {
        stack.pop();
        removeIndex--;
      }
      stack.push(n);
    });

    return stack.slice(0, count);
  }

  function merge(a1, a2) {
    const result = [];

    while (a1.length || a2.length) {
      const compare = a1 > a2 ? a1 : a2;
      result.push(compare[0]);
      compare.shift();
    }

    return result;
  }
};
