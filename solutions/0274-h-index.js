/**
 * 274. H-Index
 * https://leetcode.com/problems/h-index/
 * Difficulty: Medium
 *
 * Given an array of integers citations where citations[i] is the number of citations
 * a researcher received for their ith paper, return the researcher's h-index.
 *
 * According to the definition of h-index on Wikipedia: The h-index is defined as the
 * maximum value of h such that the given researcher has published at least h papers
 * that have each been cited at least h times.
 */

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => a - b);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= citations.length - i) {
      return citations.length - i;
    }
  }
  return 0;
};
