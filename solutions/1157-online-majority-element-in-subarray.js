/**
 * 1157. Online Majority Element In Subarray
 * https://leetcode.com/problems/online-majority-element-in-subarray/
 * Difficulty: Hard
 *
 * Design a data structure that efficiently finds the majority element of a given subarray.
 *
 * The majority element of a subarray is an element that occurs threshold times or more in
 * the subarray.
 *
 * Implementing the MajorityChecker class:
 * - MajorityChecker(int[] arr) Initializes the instance of the class with the given array arr.
 * - int query(int left, int right, int threshold) returns the element in the subarray
 *   arr[left...right] that occurs at least threshold times, or -1 if no such element exists.
 */

/**
 * @param {number[]} arr
 */
var MajorityChecker = function(arr) {
  this.positionMap = new Map();
  this.array = arr;
  for (let i = 0; i < arr.length; i++) {
    const positions = this.positionMap.get(arr[i]) || [];
    positions.push(i);
    this.positionMap.set(arr[i], positions);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
  const maxAttempts = 20;
  const rangeLength = right - left + 1;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const candidate = this.array[left + Math.floor(Math.random() * rangeLength)];
    const positions = this.positionMap.get(candidate);
    const count = countInRange(positions, left, right);

    if (count >= threshold) return candidate;
    if (count + rangeLength - count < threshold) return -1;
  }
  return -1;
};

function countInRange(positions, left, right) {
  const leftIndex = lowerBound(positions, left);
  const rightIndex = upperBound(positions, right);
  return rightIndex - leftIndex;
}

function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] < target) start = mid + 1;
    else end = mid;
  }
  return start;
}

function upperBound(arr, target) {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] <= target) start = mid + 1;
    else end = mid;
  }
  return start;
}
