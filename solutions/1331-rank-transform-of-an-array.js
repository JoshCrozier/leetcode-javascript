/**
 * 1331. Rank Transform of an Array
 * https://leetcode.com/problems/rank-transform-of-an-array/
 * Difficulty: Easy
 *
 * Given an array of integers arr, replace each element with its rank.
 *
 * The rank represents how large the element is. The rank has the following rules:
 * - Rank is an integer starting from 1.
 * - The larger the element, the larger the rank. If two elements are equal, their
 *   rank must be the same.
 * - Rank should be as small as possible.
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  const ranks = [...new Set(arr)]
    .sort((a, b) => a - b)
    .reduce((map, value, index) => map.set(value, index + 1), new Map());

  return arr.map(rank => ranks.get(rank));
};
