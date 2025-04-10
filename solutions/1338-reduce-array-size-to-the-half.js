/**
 * 1338. Reduce Array Size to The Half
 * https://leetcode.com/problems/reduce-array-size-to-the-half/
 * Difficulty: Medium
 *
 * You are given an integer array arr. You can choose a set of integers and remove all the
 * occurrences of these integers in the array.
 *
 * Return the minimum size of the set so that at least half of the integers of the array
 * are removed.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  const map = new Map();
  const halfLength = arr.length / 2;

  arr.forEach(num => map.set(num, (map.get(num) || 0) + 1));

  const frequencies = Array.from(map.values()).sort((a, b) => b - a);

  let removedCount = 0;
  let result = 0;

  for (const freq of frequencies) {
    removedCount += freq;
    result++;
    if (removedCount >= halfLength) break;
  }

  return result;
};
