/**
 * 2321. Maximum Score Of Spliced Array
 * https://leetcode.com/problems/maximum-score-of-spliced-array/
 * Difficulty: Hard
 *
 * You are given two 0-indexed integer arrays nums1 and nums2, both of length n.
 *
 * You can choose two integers left and right where 0 <= left <= right < n and swap the subarray
 * nums1[left...right] with the subarray nums2[left...right].
 * - For example, if nums1 = [1,2,3,4,5] and nums2 = [11,12,13,14,15] and you choose left = 1 and
 *   right = 2, nums1 becomes [1,12,13,4,5] and nums2 becomes [11,2,3,14,15].
 *
 * You may choose to apply the mentioned operation once or not do anything.
 *
 * The score of the arrays is the maximum of sum(nums1) and sum(nums2), where sum(arr) is the sum
 * of all the elements in the array arr.
 *
 * Return the maximum possible score.
 *
 * A subarray is a contiguous sequence of elements within an array. arr[left...right] denotes the
 * subarray that contains the elements of nums between indices left and right (inclusive).
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumsSplicedArray = function(nums1, nums2) {
  const length = nums1.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < length; i++) {
    sum1 += nums1[i];
    sum2 += nums2[i];
  }

  let maxGain1 = 0;
  let maxGain2 = 0;
  let currGain1 = 0;
  let currGain2 = 0;

  for (let i = 0; i < length; i++) {
    currGain1 = Math.max(0, currGain1 + nums2[i] - nums1[i]);
    currGain2 = Math.max(0, currGain2 + nums1[i] - nums2[i]);
    maxGain1 = Math.max(maxGain1, currGain1);
    maxGain2 = Math.max(maxGain2, currGain2);
  }

  return Math.max(sum1 + maxGain1, sum2 + maxGain2);
};
