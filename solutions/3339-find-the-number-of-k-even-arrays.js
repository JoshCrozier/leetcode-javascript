/**
 * 3339. Find the Number of K-Even Arrays
 * https://leetcode.com/problems/find-the-number-of-k-even-arrays/
 * Difficulty: Medium
 *
 * You are given three integers n, m, and k.
 *
 * An array arr is called k-even if there are exactly k indices such that, for each
 * of these indices i (0 <= i < n - 1):
 * - (arr[i] * arr[i + 1]) - arr[i] - arr[i + 1] is even.
 *
 * Return the number of possible k-even arrays of size n where all elements are in the range [1, m].
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var countOfArrays = function(n, m, k) {
  const MOD = 1e9 + 7;
  const oddCount = Math.floor((m + 1) / 2);
  const evenCount = Math.floor(m / 2);
  const dpOdd = new Array(k + 1).fill(0);
  const dpEven = new Array(k + 1).fill(0);

  dpOdd[0] = oddCount;
  dpEven[0] = evenCount;

  for (let position = 1; position < n; position++) {
    for (let evenPairs = k; evenPairs >= 0; evenPairs--) {
      const tempOdd = dpOdd[evenPairs];
      dpOdd[evenPairs] = ((dpEven[evenPairs] + dpOdd[evenPairs]) * oddCount) % MOD;
      if (evenPairs > 0) {
        dpEven[evenPairs] = ((dpEven[evenPairs - 1] + tempOdd) * evenCount) % MOD;
      } else {
        dpEven[evenPairs] = (tempOdd * evenCount) % MOD;
      }
    }
  }

  return (dpOdd[k] + dpEven[k]) % MOD;
};
