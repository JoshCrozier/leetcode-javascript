/**
 * 3109. Find the Index of Permutation
 * https://leetcode.com/problems/find-the-index-of-permutation/
 * Difficulty: Medium
 *
 * Given an array perm of length n which is a permutation of [1, 2, ..., n], return the index
 * of perm in the lexicographically sorted array of all of the permutations of [1, 2, ..., n].
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} perm
 * @return {number}
 */
var getPermutationIndex = function(perm) {
  const smallerToRight = perm.map(() => 0);

  mergeSort(0, perm.length - 1);

  const MOD = 10 ** 9 + 7;
  const factorials = computeFactorials(perm.length);

  return perm.reduce((total, _, i) => {
    return (total + smallerToRight[i] * factorials[perm.length - 1 - i]) % MOD;
  }, 0);

  function mergeSort(left, right) {
    if (left >= right) return [left];

    const mid = (left + right) >> 1;
    const leftIndices = mergeSort(left, mid);
    const rightIndices = mergeSort(mid + 1, right);
    const merged = [];
    let [leftPointer, rightPointer] = [0, 0];

    while (leftPointer < leftIndices.length || rightPointer < rightIndices.length) {
      if (rightPointer === rightIndices.length
         || (leftPointer < leftIndices.length
            && perm[leftIndices[leftPointer]] < perm[rightIndices[rightPointer]])) {
        smallerToRight[leftIndices[leftPointer]] += rightPointer;
        merged.push(leftIndices[leftPointer++]);
      } else {
        merged.push(rightIndices[rightPointer++]);
      }
    }

    return merged;
  }

  function computeFactorials(n) {
    const MOD = 10n ** 9n + 7n;
    const factorials = [1n, 1n];

    for (let i = 2n; i <= BigInt(n); i++) {
      factorials.push(i * factorials[factorials.length - 1] % MOD);
    }

    return factorials.map(val => parseInt(val));
  }
};
