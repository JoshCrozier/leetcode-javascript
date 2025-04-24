/**
 * 1636. Sort Array by Increasing Frequency
 * https://leetcode.com/problems/sort-array-by-increasing-frequency/
 * Difficulty: Easy
 *
 * Given an array of integers nums, sort the array in increasing order based on the frequency
 * of the values. If multiple values have the same frequency, sort them in decreasing order.
 *
 * Return the sorted array.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const map = new Map();
  nums.forEach(num => map.set(num, (map.get(num) || 0) + 1));

  return nums.sort((a, b) => {
    const freqA = map.get(a);
    const freqB = map.get(b);
    return freqA === freqB ? b - a : freqA - freqB;
  });
};
