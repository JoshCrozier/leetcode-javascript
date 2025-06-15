/**
 * 370. Range Addition
 * https://leetcode.com/problems/range-addition/
 * Difficulty: Medium
 *
 * You are given an integer length and an array updates where
 * updates[i] = [startIdxi, endIdxi, inci].
 *
 * You have an array arr of length length with all zeros, and you have some operation
 * to apply on arr. In the ith operation, you should increment all the elements
 * arr[startIdxi], arr[startIdxi + 1], ..., arr[endIdxi] by inci.
 *
 * Return arr after applying all the updates.
 */

/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
  const result = new Array(length).fill(0);

  for (const [start, end, inc] of updates) {
    result[start] += inc;
    if (end + 1 < length) result[end + 1] -= inc;
  }

  for (let i = 1; i < length; i++) {
    result[i] += result[i - 1];
  }

  return result;
};
