/**
 * 2992. Number of Self-Divisible Permutations
 * https://leetcode.com/problems/number-of-self-divisible-permutations/
 * Difficulty: Medium
 *
 * Given an integer n, return the number of permutations of the 1-indexed array
 * nums = [1, 2, ..., n], such that it's self-divisible.
 *
 * A 1-indexed array a of length n is self-divisible if for every 1 <= i <= n, gcd(a[i], i) == 1.
 *
 * A permutation of an array is a rearrangement of the elements of that array, for example here
 * are all of the permutations of the array [1, 2, 3]:
 * - [1, 2, 3]
 * - [1, 3, 2]
 * - [2, 1, 3]
 * - [2, 3, 1]
 * - [3, 1, 2]
 * - [3, 2, 1]
 */

/**
 * @param {number} n
 * @return {number}
 */
var selfDivisiblePermutationCount = function(n) {
  const graph = new Array(n + 1).fill().map(() => []);

  for (let position = 1; position <= n; position++) {
    for (let value = 1; value <= n; value++) {
      if (gcd(value, position) === 1) {
        graph[position].push(value);
      }
    }
  }

  return countPermutations(1, 0);

  function countPermutations(position, usedMask) {
    if (position > n) return 1;

    let count = 0;
    for (const value of graph[position]) {
      if ((usedMask & (1 << value)) === 0) {
        count += countPermutations(position + 1, usedMask | (1 << value));
      }
    }

    return count;
  }

  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
};
