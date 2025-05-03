/**
 * 1938. Maximum Genetic Difference Query
 * https://leetcode.com/problems/maximum-genetic-difference-query/
 * Difficulty: Hard
 *
 * There is a rooted tree consisting of n nodes numbered 0 to n - 1. Each node's number denotes
 * its unique genetic value (i.e. the genetic value of node x is x). The genetic difference
 * between two genetic values is defined as the bitwise-XOR of their values. You are given
 * the integer array parents, where parents[i] is the parent for node i. If node x is the root
 * of the tree, then parents[x] == -1.
 *
 * You are also given the array queries where queries[i] = [nodei, vali]. For each query i,
 * find the maximum genetic difference between vali and pi, where pi is the genetic value of
 * any node that is on the path between nodei and the root (including nodei and the root).
 * More formally, you want to maximize vali XOR pi.
 *
 * Return an array ans where ans[i] is the answer to the ith query.
 */

/**
 * @param {number[]} parents
 * @param {number[][]} queries
 * @return {number[]}
 */
var maxGeneticDifference = function(parents, queries) {
  const n = parents.length;
  const graph = Array(n).fill().map(() => []);
  let root = -1;

  for (let i = 0; i < n; i++) {
    if (parents[i] === -1) {
      root = i;
    } else {
      graph[parents[i]].push(i);
    }
  }

  const trie = { count: 0, children: {} };
  const queryMap = Array(n).fill().map(() => []);
  const result = new Array(queries.length).fill(0);

  for (let i = 0; i < queries.length; i++) {
    queryMap[queries[i][0]].push([queries[i][1], i]);
  }

  dfs(root);
  return result;

  function insertTrie(val) {
    let node = trie;
    for (let bit = 17; bit >= 0; bit--) {
      const b = (val >> bit) & 1;
      if (!node.children[b]) {
        node.children[b] = { count: 0, children: {} };
      }
      node = node.children[b];
      node.count++;
    }
  }

  function removeTrie(val) {
    let node = trie;
    for (let bit = 17; bit >= 0; bit--) {
      const b = (val >> bit) & 1;
      node = node.children[b];
      node.count--;
    }
  }

  function queryTrie(val) {
    let node = trie;
    let maxXor = 0;
    for (let bit = 17; bit >= 0; bit--) {
      const b = (val >> bit) & 1;
      if (node.children[1 - b]?.count > 0) {
        maxXor |= (1 << bit);
        node = node.children[1 - b];
      } else if (node.children[b]?.count > 0) {
        node = node.children[b];
      } else {
        return maxXor;
      }
    }
    return maxXor;
  }

  function dfs(node) {
    insertTrie(node);
    for (const [val, idx] of queryMap[node]) {
      result[idx] = queryTrie(val);
    }
    for (const child of graph[node]) {
      dfs(child);
    }
    removeTrie(node);
  }
};
