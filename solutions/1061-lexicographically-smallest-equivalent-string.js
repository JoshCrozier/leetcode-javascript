/**
 * 1061. Lexicographically Smallest Equivalent String
 * https://leetcode.com/problems/lexicographically-smallest-equivalent-string/
 * Difficulty: Medium
 *
 * You are given two strings of the same length s1 and s2 and a string baseStr.
 *
 * We say s1[i] and s2[i] are equivalent characters.
 * - For example, if s1 = "abc" and s2 = "cde", then we have 'a' == 'c', 'b' == 'd', and 'c' == 'e'.
 *
 * Equivalent characters follow the usual rules of any equivalence relation:
 * - Reflexivity: 'a' == 'a'.
 * - Symmetry: 'a' == 'b' implies 'b' == 'a'.
 * - Transitivity: 'a' == 'b' and 'b' == 'c' implies 'a' == 'c'.
 *
 * For example, given the equivalency information from s1 = "abc" and s2 = "cde", "acd" and "aab"
 * are equivalent strings of baseStr = "eed", and "aab" is the lexicographically smallest equivalent
 * string of baseStr.
 *
 * Return the lexicographically smallest equivalent string of baseStr by using the equivalency
 * information from s1 and s2.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
  const parent = Array(26).fill().map((_, i) => i);

  for (let i = 0; i < s1.length; i++) {
    union(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
  }

  return baseStr.split('')
    .map(char => String.fromCharCode(97 + find(char.charCodeAt(0) - 97)))
    .join('');

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX < rootY) {
      parent[rootY] = rootX;
    } else if (rootX > rootY) {
      parent[rootX] = rootY;
    }
  }
};
