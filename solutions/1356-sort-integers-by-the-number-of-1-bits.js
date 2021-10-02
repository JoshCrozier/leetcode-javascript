/**
 * 1356. Sort Integers by The Number of 1 Bits
 * https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
 * Difficulty: Easy
 *
 * Given an integer array arr. You have to sort the integers in the array in
 * ascending order by the number of 1's in their binary representation and
 * in case of two or more integers have the same number of 1's you have to
 * sort them in ascending order.
 *
 * Return the sorted array.
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  const getCount = n => n.toString(2).replace(/0/g, '').length;

  return arr.sort((a, b) => getCount(a) - getCount(b) || a - b);
};
