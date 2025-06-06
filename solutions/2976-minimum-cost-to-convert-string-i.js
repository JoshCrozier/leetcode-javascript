/**
 * 2976. Minimum Cost to Convert String I
 * https://leetcode.com/problems/minimum-cost-to-convert-string-i/
 * Difficulty: Medium
 *
 * You are given two 0-indexed strings source and target, both of length n and consisting of
 * lowercase English letters. You are also given two 0-indexed character arrays original and
 * changed, and an integer array cost, where cost[i] represents the cost of changing the character
 * original[i] to the character changed[i].
 *
 * You start with the string source. In one operation, you can pick a character x from the string
 * and change it to the character y at a cost of z if there exists any index j such that
 * cost[j] == z, original[j] == x, and changed[j] == y.
 *
 * Return the minimum cost to convert the string source to the string target using any number of
 * operations. If it is impossible to convert source to target, return -1.
 *
 * Note that there may exist indices i, j such that original[j] == original[i] and
 * changed[j] == changed[i].
 */

/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
  const graph = new Array(26).fill().map(() => new Array(26).fill(Infinity));
  for (let i = 0; i < 26; i++) graph[i][i] = 0;

  for (let i = 0; i < original.length; i++) {
    const from = original[i].charCodeAt(0) - 97;
    const to = changed[i].charCodeAt(0) - 97;
    graph[from][to] = Math.min(graph[from][to], cost[i]);
  }

  for (let k = 0; k < 26; k++) {
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  let result = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== target[i]) {
      const from = source[i].charCodeAt(0) - 97;
      const to = target[i].charCodeAt(0) - 97;
      if (graph[from][to] === Infinity) return -1;
      result += graph[from][to];
    }
  }

  return result;
};
