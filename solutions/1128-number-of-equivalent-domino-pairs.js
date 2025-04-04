/**
 * 1128. Number of Equivalent Domino Pairs
 * https://leetcode.com/problems/number-of-equivalent-domino-pairs/
 * Difficulty: Easy
 *
 * Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d]
 * if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino
 * can be rotated to be equal to another domino.
 *
 * Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and
 * dominoes[i] is equivalent to dominoes[j].
 */

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const map = new Map();
  let result = 0;

  for (const [a, b] of dominoes) {
    const key = Math.min(a, b) * 10 + Math.max(a, b);
    const count = map.get(key) || 0;
    result += count;
    map.set(key, count + 1);
  }

  return result;
};
