/**
 * 2035. Partition Array Into Two Arrays to Minimize Sum Difference
 * https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/
 * Difficulty: Hard
 *
 * You are given an integer array nums of 2 * n integers. You need to partition nums into two arrays
 * of length n to minimize the absolute difference of the sums of the arrays. To partition nums,
 * put each element of nums into one of the two arrays.
 *
 * Return the minimum possible absolute difference.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
  const n = nums.length / 2;
  let result = Infinity;
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  const firstHalfSubsets = new Map();

  for (let mask = 0; mask < (1 << n); mask++) {
    let size = 0;
    let subsetSum = 0;

    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) !== 0) {
        size++;
        subsetSum += nums[i];
      }
    }

    if (!firstHalfSubsets.has(size)) {
      firstHalfSubsets.set(size, []);
    }
    firstHalfSubsets.get(size).push(subsetSum);
  }

  for (const [size, sums] of firstHalfSubsets) {
    sums.sort((a, b) => a - b);
  }

  for (let mask = 0; mask < (1 << n); mask++) {
    let size = 0;
    let secondHalfSum = 0;

    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) !== 0) {
        size++;
        secondHalfSum += nums[n + i];
      }
    }

    const complementSize = n - size;
    const firstHalfSums = firstHalfSubsets.get(complementSize);
    const target = (totalSum - 2 * secondHalfSum) / 2;
    const closestIndex = binarySearch(firstHalfSums, target);

    if (closestIndex < firstHalfSums.length) {
      result = Math.min(
        result, Math.abs(totalSum - 2 * (secondHalfSum + firstHalfSums[closestIndex]))
      );
    }

    if (closestIndex > 0) {
      result = Math.min(
        result, Math.abs(totalSum - 2 * (secondHalfSum + firstHalfSums[closestIndex - 1]))
      );
    }
  }

  return result;
};

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  if (right < 0) return 0;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
