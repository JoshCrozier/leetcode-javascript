/**
 * 2638. Count the Number of K-Free Subsets
 * https://leetcode.com/problems/count-the-number-of-k-free-subsets/
 * Difficulty: Medium
 *
 * You are given an integer array nums, which contains distinct elements and an integer k.
 *
 * A subset is called a k-Free subset if it contains no two elements with an absolute
 * difference equal to k. Notice that the empty set is a k-Free subset.
 *
 * Return the number of k-Free subsets of nums.
 *
 * A subset of an array is a selection of elements (possibly none) of the array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countTheNumOfKFreeSubsets = function(nums, k) {
  nums.sort((a, b) => a - b);
  const visited = new Set();
  let result = 1;

  for (const num of nums) {
    if (visited.has(num)) continue;

    const chain = [];
    let current = num;

    while (nums.includes(current) && !visited.has(current)) {
      chain.push(current);
      visited.add(current);
      current += k;
    }

    result *= calculateChainSubsets(chain.length);
  }

  return result;

  function calculateChainSubsets(length) {
    if (length === 0) return 1;
    if (length === 1) return 2;

    let prev2 = 1;
    let prev1 = 2;

    for (let i = 2; i <= length; i++) {
      const current = prev1 + prev2;
      prev2 = prev1;
      prev1 = current;
    }

    return prev1;
  }
};
