/**
 * 1534. Count Good Triplets
 * https://leetcode.com/problems/count-good-triplets/
 * Difficulty: Easy
 *
 * Given an array of integers arr, and three integers a, b and c. You need to find the number
 * of good triplets.
 *
 * A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
 * - 0 <= i < j < k < arr.length
 * - |arr[i] - arr[j]| <= a
 * - |arr[j] - arr[k]| <= b
 * - |arr[i] - arr[k]| <= c
 *
 * Where |x| denotes the absolute value of x.
 *
 * Return the number of good triplets.
 */

function countGoodTriplets(arr, a, b, c) {
  const length = arr.length;
  let result = 0;

  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) <= a) {
        for (let k = j + 1; k < length; k++) {
          if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
            result++;
          }
        }
      }
    }
  }

  return result;
}
