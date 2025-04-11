/**
 * 1346. Check If N and Its Double Exist
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/
 * Difficulty: Easy
 *
 * Given an array arr of integers, check if there exist two indices i and j such that:
 * - i != j
 * - 0 <= i, j < arr.length
 * - arr[i] == 2 * arr[j]
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  const set = new Set();

  for (const num of arr) {
    if (set.has(num * 2) || set.has(num / 2)) {
      return true;
    }
    set.add(num);
  }

  return false;
};
