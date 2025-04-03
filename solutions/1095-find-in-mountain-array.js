/**
 * 1095. Find in Mountain Array
 * https://leetcode.com/problems/find-in-mountain-array/
 * Difficulty: Hard
 *
 * You may recall that an array arr is a mountain array if and only if:
 * - arr.length >= 3
 * - There exists some i with 0 < i < arr.length - 1 such that:
 *   - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 *   - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 *
 * Given a mountain array mountainArr, return the minimum index such that
 * mountainArr.get(index) == target. If such an index does not exist, return -1.
 *
 * You cannot access the mountain array directly. You may only access the array
 * using a MountainArray interface:
 * - MountainArray.get(k) returns the element of the array at index k (0-indexed).
 * - MountainArray.length() returns the length of the array.
 *
 * Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer.
 * Also, any solutions that attempt to circumvent the judge will result in disqualification.
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  const length = mountainArr.length();

  let left = 0;
  let right = length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  const peak = left;

  left = 0;
  right = peak;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = mountainArr.get(mid);
    if (value === target) return mid;
    if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  left = peak;
  right = length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = mountainArr.get(mid);
    if (value === target) return mid;
    if (value > target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
