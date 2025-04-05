/**
 * 1187. Make Array Strictly Increasing
 * https://leetcode.com/problems/make-array-strictly-increasing/
 * Difficulty: Hard
 *
 * Given two integer arrays arr1 and arr2, return the minimum number of operations (possibly zero)
 * needed to make arr1 strictly increasing.
 *
 * In one operation, you can choose two indices 0 <= i < arr1.length and 0 <= j < arr2.length and
 * do the assignment arr1[i] = arr2[j].
 *
 * If there is no way to make arr1 strictly increasing, return -1.
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
  arr2 = [...new Set(arr2)].sort((a, b) => a - b);
  let dp = new Map([[-Infinity, 0]]);

  for (let i = 0; i < arr1.length; i++) {
    const nextDp = new Map();
    let minSteps = Infinity;

    for (const [prev, steps] of dp) {
      if (steps >= minSteps) continue;

      if (arr1[i] > prev) {
        updateMin(nextDp, arr1[i], steps);
        minSteps = Math.min(minSteps, steps);
      }

      const start = binarySearch(arr2, prev);
      for (let j = start; j < arr2.length; j++) {
        if (arr2[j] <= prev) continue;
        updateMin(nextDp, arr2[j], steps + 1);
        minSteps = Math.min(minSteps, steps + 1);
        if (arr2[j] >= arr1[i]) break;
      }
    }

    if (nextDp.size === 0) return -1;
    dp = pruneStates(nextDp);
  }

  return Math.min(...dp.values());
};

function updateMin(map, key, value) {
  map.set(key, Math.min(value, map.get(key) ?? Infinity));
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return left;
}

function pruneStates(input) {
  const map = new Map();
  let minSteps = Infinity;
  for (const [val, steps] of [...input].sort((a, b) => a[0] - b[0])) {
    if (steps < minSteps) {
      map.set(val, steps);
      minSteps = steps;
    }
  }
  return map;
}
