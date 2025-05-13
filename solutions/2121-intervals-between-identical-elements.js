/**
 * 2121. Intervals Between Identical Elements
 * https://leetcode.com/problems/intervals-between-identical-elements/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of n integers arr.
 *
 * The interval between two elements in arr is defined as the absolute difference between their
 * indices. More formally, the interval between arr[i] and arr[j] is |i - j|.
 *
 * Return an array intervals of length n where intervals[i] is the sum of intervals between arr[i]
 * and each element in arr with the same value as arr[i].
 *
 * Note: |x| is the absolute value of x.
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function(arr) {
  const valueIndices = new Map();
  const result = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    if (!valueIndices.has(arr[i])) {
      valueIndices.set(arr[i], []);
    }
    valueIndices.get(arr[i]).push(i);
  }

  for (const indices of valueIndices.values()) {
    let prefixSum = 0;
    for (let i = 1; i < indices.length; i++) {
      prefixSum += indices[i] - indices[0];
    }

    result[indices[0]] = prefixSum;

    for (let i = 1; i < indices.length; i++) {
      const diff = indices[i] - indices[i - 1];
      prefixSum += diff * (i - (indices.length - i));
      result[indices[i]] = prefixSum;
    }
  }

  return result;
};
