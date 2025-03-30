/**
 * 990. Satisfiability of Equality Equations
 * https://leetcode.com/problems/satisfiability-of-equality-equations/
 * Difficulty: Medium
 *
 * You are given an array of strings equations that represent relationships between variables where
 * each string equations[i] is of length 4 and takes one of two different forms: "xi==yi" or
 * "xi!=yi".Here, xi and yi are lowercase letters (not necessarily different) that represent
 * one-letter variable names.
 *
 * Return true if it is possible to assign integers to variable names so as to satisfy all the given
 * equations, or false otherwise.
 */

/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  const parent = new Array(26).fill(0).map((_, i) => i);

  for (const equation of equations) {
    if (equation[1] === '=') {
      const x = equation[0].charCodeAt(0) - 97;
      const y = equation[3].charCodeAt(0) - 97;
      union(x, y);
    }
  }

  for (const equation of equations) {
    if (equation[1] === '!') {
      const x = equation[0].charCodeAt(0) - 97;
      const y = equation[3].charCodeAt(0) - 97;
      if (find(x) === find(y)) {
        return false;
      }
    }
  }

  return true;

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    parent[find(x)] = find(y);
  }
};
