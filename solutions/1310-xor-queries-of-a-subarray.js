/**
 * 1310. XOR Queries of a Subarray
 * https://leetcode.com/problems/xor-queries-of-a-subarray/
 * Difficulty: Medium
 *
 * You are given an array arr of positive integers. You are also given the array queries where
 * queries[i] = [lefti, righti].
 *
 * For each query i compute the XOR of elements from lefti to righti (that is, arr[lefti] XOR
 * arr[lefti + 1] XOR ... XOR arr[righti]).
 *
 * Return an array answer where answer[i] is the answer to the ith query.
 */

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  const options = [0];
  arr.forEach((num, i) => options.push(options[i] ^ num));
  return queries.map(([left, right]) => options[right + 1] ^ options[left]);
};
