/**
 * 2111. Minimum Operations to Make the Array K-Increasing
 * https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/
 * Difficulty: Hard
 *
 * You are given a 0-indexed array arr consisting of n positive integers, and a positive integer k.
 *
 * The array arr is called K-increasing if arr[i-k] <= arr[i] holds for every index i, where
 * k <= i <= n-1.
 *
 * - For example, arr = [4, 1, 5, 2, 6, 2] is K-increasing for k = 2 because:
 *   - arr[0] <= arr[2] (4 <= 5)
 *   - arr[1] <= arr[3] (1 <= 2)
 *   - arr[2] <= arr[4] (5 <= 6)
 *   - arr[3] <= arr[5] (2 <= 2)
 * - However, the same arr is not K-increasing for k = 1 (because arr[0] > arr[1]) or k = 3 (because
 *   arr[0] > arr[3]).
 *
 * In one operation, you can choose an index i and change arr[i] into any positive integer.
 *
 * Return the minimum number of operations required to make the array K-increasing for the given k.
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kIncreasing = function(arr, k) {
  let result = 0;
  for (let i = 0; i < k; i++) {
    const subsequence = [];
    for (let j = i; j < arr.length; j += k) {
      subsequence.push(arr[j]);
    }
    result += longestNonDecreasingSubsequence(subsequence);
  }

  return result;

  function longestNonDecreasingSubsequence(nums) {
    const tails = [];
    for (const num of nums) {
      let left = 0;
      let right = tails.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] <= num) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tails[left] = num;
    }
    return nums.length - tails.length;
  }
};
