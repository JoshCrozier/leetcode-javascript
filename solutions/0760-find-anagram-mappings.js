/**
 * 760. Find Anagram Mappings
 * https://leetcode.com/problems/find-anagram-mappings/
 * Difficulty: Easy
 *
 * You are given two integer arrays nums1 and nums2 where nums2 is an anagram of nums1. Both
 * arrays may contain duplicates.
 *
 * Return an index mapping array mapping from nums1 to nums2 where mapping[i] = j means the
 * ith element in nums1 appears in nums2 at index j. If there are multiple answers, return
 * any of them.
 *
 * An array a is an anagram of an array b means b is made by randomizing the order of the
 * elements in a.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
  const map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    if (!map.has(nums2[i])) {
      map.set(nums2[i], []);
    }
    map.get(nums2[i]).push(i);
  }

  const result = [];
  for (const num of nums1) {
    result.push(map.get(num).pop());
  }

  return result;
};
