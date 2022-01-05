/**
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Difficulty: Easy
 *
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number. Let these two numbers
 * be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array
 * [index1, index2] of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may not use the same
 * element twice.
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];

    if (map.has(diff)) {
      return [map.get(diff) + 1, i + 1];
    }

    map.set(numbers[i], i);
  }
};
