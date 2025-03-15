/**
 * 801. Minimum Swaps To Make Sequences Increasing
 * https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/
 * Difficulty: Hard
 *
 * You are given two integer arrays of the same length nums1 and nums2. In one operation, you are
 * allowed to swap nums1[i] with nums2[i].
 *
 * For example, if nums1 = [1,2,3,8], and nums2 = [5,6,7,4], you can swap the element at i = 3 to
 * obtain nums1 = [1,2,3,4] and nums2 = [5,6,7,8].
 *
 * Return the minimum number of needed operations to make nums1 and nums2 strictly increasing. The
 * test cases are generated so that the given input always makes it possible.
 *
 * An array arr is strictly increasing if and only if
 * arr[0] < arr[1] < arr[2] < ... < arr[arr.length - 1].
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
  let noSwap = 0;
  let swap = 1;

  for (let i = 1; i < nums1.length; i++) {
    let nextNoSwap = Infinity;
    let nextSwap = Infinity;

    const canKeepBoth = nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1];
    const canSwapBoth = nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1];

    if (canKeepBoth) {
      nextNoSwap = Math.min(nextNoSwap, noSwap);
      nextSwap = Math.min(nextSwap, swap + 1);
    }

    if (canSwapBoth) {
      nextNoSwap = Math.min(nextNoSwap, swap);
      nextSwap = Math.min(nextSwap, noSwap + 1);
    }

    noSwap = nextNoSwap;
    swap = nextSwap;
  }

  return Math.min(noSwap, swap);
};
