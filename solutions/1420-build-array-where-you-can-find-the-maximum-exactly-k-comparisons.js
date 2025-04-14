/**
 * 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons
 * https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/
 * Difficulty: Hard
 *
 * You are given three integers n, m and k. Consider the following algorithm to find the maximum
 * element of an array of positive integers.
 *
 * You should build the array arr which has the following properties:
 * - arr has exactly n integers.
 * - 1 <= arr[i] <= m where (0 <= i < n).
 * - After applying the mentioned algorithm to arr, the value search_cost is equal to k.
 *
 * Return the number of ways to build the array arr under the mentioned conditions. As the answer
 * may grow large, the answer must be computed modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
function numOfArrays(length, maxValue, searchCost) {
  const MOD = 1e9 + 7;
  const cache = Array.from({ length: length + 1 }, () =>
    Array.from({ length: maxValue + 1 }, () =>
      Array(searchCost + 1).fill(-1)
    )
  );

  function computeArrays(pos, currentMax, remainingCost) {
    if (pos === length) return remainingCost === 0 ? 1 : 0;
    if (remainingCost < 0) return 0;
    if (cache[pos][currentMax][remainingCost] !== -1) {
      return cache[pos][currentMax][remainingCost];
    }

    let total = 0;
    for (let value = 1; value <= currentMax; value++) {
      total = (total + computeArrays(pos + 1, currentMax, remainingCost)) % MOD;
    }

    if (remainingCost > 0) {
      for (let value = currentMax + 1; value <= maxValue; value++) {
        total = (total + computeArrays(pos + 1, value, remainingCost - 1)) % MOD;
      }
    }

    return cache[pos][currentMax][remainingCost] = total;
  }

  let result = 0;
  for (let value = 1; value <= maxValue; value++) {
    result = (result + computeArrays(1, value, searchCost - 1)) % MOD;
  }

  return result;
}
