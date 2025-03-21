/**
 * 870. Advantage Shuffle
 * https://leetcode.com/problems/advantage-shuffle/
 * Difficulty: Medium
 *
 * You are given two integer arrays nums1 and nums2 both of the same length. The advantage of nums1
 * with respect to nums2 is the number of indices i for which nums1[i] > nums2[i].
 *
 * Return any permutation of nums1 that maximizes its advantage with respect to nums2.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  const sortedNums1 = [...nums1].sort((a, b) => a - b);
  const indexedNums2 = nums2.map((val, idx) => ({ val, idx }))
    .sort((a, b) => a.val - b.val);

  const result = new Array(nums1.length);
  let left = 0;
  let right = nums1.length - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    const current = indexedNums2[i];
    if (sortedNums1[right] > current.val) {
      result[current.idx] = sortedNums1[right--];
    } else {
      result[current.idx] = sortedNums1[left++];
    }
  }

  return result;
};
