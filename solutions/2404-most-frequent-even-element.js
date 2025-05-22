/**
 * 2404. Most Frequent Even Element
 * https://leetcode.com/problems/most-frequent-even-element/
 * Difficulty: Easy
 *
 * Given an integer array nums, return the most frequent even element.
 *
 * If there is a tie, return the smallest one. If there is no such element, return -1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
  const map = new Map();
  let maxCount = 0;
  let result = -1;

  for (const num of nums) {
    if (num % 2 === 0) {
      const count = (map.get(num) || 0) + 1;
      map.set(num, count);
      if (count > maxCount || (count === maxCount && num < result)) {
        maxCount = count;
        result = num;
      }
    }
  }

  return result;
};

