/**
 * 2307. Check for Contradictions in Equations
 * https://leetcode.com/problems/check-for-contradictions-in-equations/
 * Difficulty: Hard
 *
 * You are given a 2D array of strings equations and an array of real numbers values, where
 * equations[i] = [Ai, Bi] and values[i] means that Ai / Bi = values[i].
 *
 * Determine if there exists a contradiction in the equations. Return true if there is a
 * contradiction, or false otherwise.
 *
 * Note:
 * - When checking if two numbers are equal, check that their absolute difference is less than 10-5.
 * - The testcases are generated such that there are no cases targeting precision, i.e. using double
 *   is enough to solve the problem.
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @return {boolean}
 */
var checkContradictions = function(equations, values) {
  const graph = new Map();

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];

    const existingValue = dfs(a, b, new Set(), 1);

    if (existingValue !== null && Math.abs(existingValue - value) >= 1e-5) {
      return true;
    }

    addEdge(a, b, value);
  }

  return false;

  function addEdge(a, b, value) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push([b, value]);
    graph.get(b).push([a, 1 / value]);
  }

  function dfs(start, target, visited, currentValue) {
    if (start === target) return currentValue;
    if (visited.has(start)) return null;

    visited.add(start);

    for (const [neighbor, value] of graph.get(start) || []) {
      const result = dfs(neighbor, target, visited, currentValue * value);
      if (result !== null) return result;
    }

    visited.delete(start);
    return null;
  }
};
