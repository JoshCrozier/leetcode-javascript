/**
 * 1013. Partition Array Into Three Parts With Equal Sum
 * https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
 * Difficulty: Easy
 *
 * Given an array of integers arr, return true if we can partition the array into three
 * non-empty parts with equal sums.
 *
 * Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1]
 * + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1]
 * + ... + arr[arr.length - 1])
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
  const totalSum = arr.reduce((sum, num) => sum + num, 0);
  if (totalSum % 3 !== 0) return false;

  const targetSum = totalSum / 3;
  let partsFound = 0;
  let currentSum = 0;

  for (const num of arr) {
    currentSum += num;
    if (currentSum === targetSum) {
      partsFound++;
      currentSum = 0;
    }
  }

  return partsFound >= 3;
};
