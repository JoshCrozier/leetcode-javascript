/**
 * 697. Degree of an Array
 * https://leetcode.com/problems/degree-of-an-array/
 * Difficulty: Easy
 *
 * Given a non-empty array of non-negative integers nums, the degree of this array is
 * defined as the maximum frequency of any one of its elements.
 *
 * Your task is to find the smallest possible length of a (contiguous) subarray of
 * nums, that has the same degree as nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const map = new Map();

  nums.forEach((key, index) => {
    if (!map.has(key)) {
      map.set(key, { start: index, end: index, count: 1 });
    }
    const { start, end, count } = map.get(key);
    map.set(key, { start, end: index, count: count + 1 });
  });

  let max = 0;
  let result = Infinity;
  Array.from(map).forEach(([_, { start, end, count }]) => {
    const min = (end - start) + 1;
    if (count > max || (min < result && count === max)) {
      result = min;
      max = count;
    }
  });

  return result;
};
