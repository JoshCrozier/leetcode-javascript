/**
 * 1569. Number of Ways to Reorder Array to Get Same BST
 * https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/
 * Difficulty: Hard
 *
 * Given an array nums that represents a permutation of integers from 1 to n. We are going to
 * construct a binary search tree (BST) by inserting the elements of nums in order into an
 * initially empty BST. Find the number of different ways to reorder nums so that the constructed
 * BST is identical to that formed from the original array nums.
 *
 * For example, given nums = [2,1,3], we will have 2 as the root, 1 as a left child, and 3 as a
 * right child. The array [2,3,1] also yields the same BST but [3,2,1] yields a different BST.
 *
 * Return the number of ways to reorder nums such that the BST formed is identical to the original
 * BST formed from nums.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
  const MOD = BigInt(10 ** 9 + 7);
  const factorialCache = Array(nums.length).fill(null);
  factorialCache[0] = 1n;

  function calculatePermutations(arr) {
    if (arr.length < 3) return 1n;

    const root = arr[0];
    const leftSubtree = [];
    const rightSubtree = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < root) {
        leftSubtree.push(arr[i]);
      } else {
        rightSubtree.push(arr[i]);
      }
    }

    const leftPermutations = calculatePermutations(leftSubtree);
    const rightPermutations = calculatePermutations(rightSubtree);
    const totalNodes = BigInt(arr.length - 1);
    const leftNodes = BigInt(leftSubtree.length);

    return (helper(totalNodes, leftNodes) * leftPermutations * rightPermutations) % MOD;
  }

  function helper(n, k) {
    factorialCache[n] = computeFactorial(n);
    factorialCache[n - k] = computeFactorial(n - k);
    factorialCache[k] = computeFactorial(k);
    return factorialCache[n] / (factorialCache[k] * factorialCache[n - k]);
  }

  function computeFactorial(n) {
    if (factorialCache[n]) return factorialCache[n];
    return n * computeFactorial(n - 1n);
  }

  return Number((calculatePermutations(nums) - 1n) % MOD);
};
