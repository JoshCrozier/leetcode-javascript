/**
 * 1471. The k Strongest Values in an Array
 * https://leetcode.com/problems/the-k-strongest-values-in-an-array/
 * Difficulty: Medium
 *
 * Given an array of integers arr and an integer k.
 *
 * A value arr[i] is said to be stronger than a value arr[j] if |arr[i] - m| > |arr[j] - m|
 * where m is the centre of the array.
 *
 * If |arr[i] - m| == |arr[j] - m|, then arr[i] is said to be stronger than arr[j]
 * if arr[i] > arr[j].
 *
 * Return a list of the strongest k values in the array. return the answer in any arbitrary order.
 *
 * The centre is the middle value in an ordered integer list. More formally, if the length of the
 * list is n, the centre is the element in position ((n - 1) / 2) in the sorted list (0-indexed).
 * - For arr = [6, -3, 7, 2, 11], n = 5 and the centre is obtained by sorting the array
 *   arr = [-3, 2, 6, 7, 11] and the centre is arr[m] where m = ((5 - 1) / 2) = 2. The centre is 6.
 * - For arr = [-7, 22, 17, 3], n = 4 and the centre is obtained by sorting the array
 *   arr = [-7, 3, 17, 22] and the centre is arr[m] where m = ((4 - 1) / 2) = 1. The centre is 3.
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const centre = sorted[Math.floor((sorted.length - 1) / 2)];

  return arr.sort((a, b) => {
    const diffA = Math.abs(a - centre);
    const diffB = Math.abs(b - centre);
    return diffA === diffB ? b - a : diffB - diffA;
  }).slice(0, k);
};
