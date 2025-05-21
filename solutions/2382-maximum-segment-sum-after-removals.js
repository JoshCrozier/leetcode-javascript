/**
 * 2382. Maximum Segment Sum After Removals
 * https://leetcode.com/problems/maximum-segment-sum-after-removals/
 * Difficulty: Hard
 *
 * You are given two 0-indexed integer arrays nums and removeQueries, both of length n. For
 * the ith query, the element in nums at the index removeQueries[i] is removed, splitting
 * nums into different segments.
 *
 * A segment is a contiguous sequence of positive integers in nums. A segment sum is the sum
 * of every element in a segment.
 *
 * Return an integer array answer, of length n, where answer[i] is the maximum segment sum after
 * applying the ith removal.
 *
 * Note: The same index will not be removed more than once.
 */

/**
 * @param {number[]} nums
 * @param {number[]} removeQueries
 * @return {number[]}
 */
var maximumSegmentSum = function(nums, removeQueries) {
  const n = nums.length;
  const result = new Array(n);
  const prefixSum = new Array(n + 1).fill(0);
  const parents = new Array(n).fill(-1);
  const sizes = new Array(n).fill(0);
  const sums = new Array(n).fill(0);
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    result[i] = maxSum;
    const index = removeQueries[i];

    parents[index] = index;
    sizes[index] = 1;
    sums[index] = nums[index];

    if (index > 0 && parents[index - 1] !== -1) {
      const leftRoot = findRoot(parents, index - 1);
      const segmentSum = sums[leftRoot] + sums[index];

      parents[index] = leftRoot;
      sizes[leftRoot] += sizes[index];
      sums[leftRoot] = segmentSum;
    }

    if (index < n - 1 && parents[index + 1] !== -1) {
      const root = findRoot(parents, index);
      const rightRoot = findRoot(parents, index + 1);

      if (root !== rightRoot) {
        const segmentSum = sums[root] + sums[rightRoot];

        if (sizes[root] < sizes[rightRoot]) {
          parents[root] = rightRoot;
          sizes[rightRoot] += sizes[root];
          sums[rightRoot] = segmentSum;
        } else {
          parents[rightRoot] = root;
          sizes[root] += sizes[rightRoot];
          sums[root] = segmentSum;
        }
      }
    }

    maxSum = Math.max(maxSum, sums[findRoot(parents, index)]);
  }

  return result;
};

function findRoot(parents, x) {
  if (parents[x] !== x) {
    parents[x] = findRoot(parents, parents[x]);
  }
  return parents[x];
}
