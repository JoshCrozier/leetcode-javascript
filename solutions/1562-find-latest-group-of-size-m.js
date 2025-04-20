/**
 * 1562. Find Latest Group of Size M
 * https://leetcode.com/problems/find-latest-group-of-size-m/
 * Difficulty: Medium
 *
 * Given an array arr that represents a permutation of numbers from 1 to n.
 *
 * You have a binary string of size n that initially has all its bits set to zero. At each step
 * i (assuming both the binary string and arr are 1-indexed) from 1 to n, the bit at position
 * arr[i] is set to 1.
 *
 * You are also given an integer m. Find the latest step at which there exists a group of ones
 * of length m. A group of ones is a contiguous substring of 1's such that it cannot be extended
 * in either direction.
 *
 * Return the latest step at which there exists a group of ones of length exactly m. If no such
 * group exists, return -1.
 */

/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function(arr, m) {
  const lengths = new Array(arr.length + 2).fill(0);
  const count = new Map();
  let result = -1;

  for (let step = 0; step < arr.length; step++) {
    const pos = arr[step];
    const left = lengths[pos - 1];
    const right = lengths[pos + 1];
    const newLength = left + right + 1;

    lengths[pos - left] = newLength;
    lengths[pos + right] = newLength;
    lengths[pos] = newLength;

    count.set(left, (count.get(left) || 0) - 1);
    count.set(right, (count.get(right) || 0) - 1);
    count.set(newLength, (count.get(newLength) || 0) + 1);

    if (count.get(m) > 0) result = step + 1;
  }

  return result;
};
