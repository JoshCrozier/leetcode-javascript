/**
 * 1707. Maximum XOR With an Element From Array
 * https://leetcode.com/problems/maximum-xor-with-an-element-from-array/
 * Difficulty: Hard
 *
 * You are given an array nums consisting of non-negative integers. You are also given a queries
 * array, where queries[i] = [xi, mi].
 *
 * The answer to the ith query is the maximum bitwise XOR value of xi and any element of nums that
 * does not exceed mi. In other words, the answer is max(nums[j] XOR xi) for all j such that
 * nums[j] <= mi. If all elements in nums are larger than mi, then the answer is -1.
 *
 * Return an integer array answer where answer.length == queries.length and answer[i] is the
 * answer to the ith query.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximizeXor = function(nums, queries) {
  nums.sort((a, b) => a - b);
  const sortedQueries = queries.map((q, i) => [q[0], q[1], i]).sort((a, b) => a[1] - b[1]);
  const result = new Array(queries.length).fill(-1);

  const trie = {};
  let numIndex = 0;

  for (const [x, m, queryIndex] of sortedQueries) {
    while (numIndex < nums.length && nums[numIndex] <= m) {
      let node = trie;
      for (let bit = 30; bit >= 0; bit--) {
        const bitValue = (nums[numIndex] >> bit) & 1;
        if (!node[bitValue]) node[bitValue] = {};
        node = node[bitValue];
      }
      numIndex++;
    }

    if (numIndex === 0) continue;

    let maxXor = 0;
    let node = trie;
    for (let bit = 30; bit >= 0; bit--) {
      const bitValue = (x >> bit) & 1;
      const oppositeBit = bitValue ^ 1;
      if (node[oppositeBit]) {
        maxXor |= (1 << bit);
        node = node[oppositeBit];
      } else {
        node = node[bitValue];
      }
    }
    result[queryIndex] = maxXor;
  }

  return result;
};
