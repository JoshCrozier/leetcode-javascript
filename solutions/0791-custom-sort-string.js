/**
 * 791. Custom Sort String
 * https://leetcode.com/problems/custom-sort-string/
 * Difficulty: Medium
 *
 * S and T are strings composed of lowercase letters. In S,
 * no letter occurs more than once.
 *
 * S was sorted in some custom order previously. We want to
 * permute the characters of T so that they match the order
 * that S was sorted. More specifically, if x occurs before
 * y in S, then x should occur before y in the returned string.
 *
 * Return any permutation of T (as a string) that satisfies
 * this property.
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  const order = S.split('').reduce((o, k, i) => ({...o, [k]: i}), {});
  return T.split('').sort((a, b) => (order[a] || 0) - (order[b] || 0)).join('');
};
