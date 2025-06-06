/**
 * 3005. Count Elements With Maximum Frequency
 * https://leetcode.com/problems/count-elements-with-maximum-frequency/
 * Difficulty: Easy
 *
 * You are given an array nums consisting of positive integers.
 *
 * Return the total frequencies of elements in nums such that those elements all have the
 * maximum frequency.
 *
 * The frequency of an element is the number of occurrences of that element in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
  const map = new Map();
  let maxFreq = 0;
  let result = 0;

  for (const num of nums) {
    const count = (map.get(num) || 0) + 1;
    map.set(num, count);
    if (count > maxFreq) {
      maxFreq = count;
      result = count;
    } else if (count === maxFreq) {
      result += count;
    }
  }

  return result;
};
