/**
 * 2003. Smallest Missing Genetic Value in Each Subtree
 * https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/
 * Difficulty: Hard
 *
 * There is a family tree rooted at 0 consisting of n nodes numbered 0 to n - 1. You are given a
 * 0-indexed integer array parents, where parents[i] is the parent for node i. Since node 0 is
 * the root, parents[0] == -1.
 *
 * There are 105 genetic values, each represented by an integer in the inclusive range [1, 105].
 * You are given a 0-indexed integer array nums, where nums[i] is a distinct genetic value for
 * node i.
 *
 * Return an array ans of length n where ans[i] is the smallest genetic value that is missing
 * from the subtree rooted at node i.
 *
 * The subtree rooted at a node x contains node x and all of its descendant nodes.
 */

/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestMissingValueSubtree = function(parents, nums) {
  const n = parents.length;
  const result = new Array(n).fill(1);
  const children = Array.from({ length: n }, () => []);
  const seen = new Set();
  let maxMissing = 1;

  for (let i = 1; i < n; i++) {
    children[parents[i]].push(i);
  }

  const nodeWithOne = nums.indexOf(1);
  if (nodeWithOne === -1) return result;

  let current = nodeWithOne;
  while (current !== -1) {
    const stack = [current];
    while (stack.length) {
      const node = stack.pop();
      seen.add(nums[node]);
      for (const child of children[node]) {
        if (!seen.has(nums[child])) stack.push(child);
      }
    }
    while (seen.has(maxMissing)) maxMissing++;
    result[current] = maxMissing;
    current = parents[current];
  }

  return result;
};
