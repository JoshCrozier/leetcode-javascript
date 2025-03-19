/**
 * 839. Similar String Groups
 * https://leetcode.com/problems/similar-string-groups/
 * Difficulty: Hard
 *
 * Two strings, X and Y, are considered similar if either they are identical or we can make them
 * equivalent by swapping at most two letters (in distinct positions) within the string X.
 *
 * For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and
 * "arts" are similar, but "star" is not similar to "tars", "rats", or "arts".
 *
 * Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.
 * Notice that "tars" and "arts" are in the same group even though they are not similar. Formally,
 * each group is such that a word is in the group if and only if it is similar to at least one
 * other word in the group.
 *
 * We are given a list strs of strings where every string in strs is an anagram of every other
 * string in strs. How many groups are there?
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  const parent = Array.from({ length: strs.length }, (_, i) => i);
  const rank = new Array(strs.length).fill(0);

  for (let i = 0; i < strs.length; i++) {
    for (let j = i + 1; j < strs.length; j++) {
      if (areSimilar(strs[i], strs[j])) union(i, j);
    }
  }

  const groups = new Set();
  for (let i = 0; i < strs.length; i++) groups.add(find(i));

  return groups.size;

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) return;

    if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY;
    } else {
      parent[rootY] = rootX;
      if (rank[rootX] === rank[rootY]) rank[rootX]++;
    }
  }

  function areSimilar(a, b) {
    if (a === b) return true;

    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i] && ++diff > 2) return false;
    }

    return diff === 2;
  }
};
