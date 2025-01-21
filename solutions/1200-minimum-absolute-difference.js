/**
 * 1200. Minimum Absolute Difference
 * https://leetcode.com/problems/minimum-absolute-difference/
 * Difficulty: Easy
 *
 * Given an array of distinct integers arr, find all pairs of elements with the minimum absolute
 * difference of any two elements.
 *
 * Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows:
 * - a, b are from arr
 * - a < b
 * - b - a equals to the minimum absolute difference of any two elements in arr
 */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b);

  const min = arr.reduce((m, n, i) => Math.min(m, n - (arr[i - 1] ?? -Infinity)), Infinity);
  return arr.reduce((result, n, i) => {
    if (min === n - arr[i - 1]) {
      result.push([arr[i - 1], n]);
    }
    return result;
  }, []);
};
