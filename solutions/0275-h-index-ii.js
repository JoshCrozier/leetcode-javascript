/**
 * 275. H-Index II
 * https://leetcode.com/problems/h-index-ii/
 * Difficulty: Medium
 *
 * Given an array of integers citations where citations[i] is the number of citations a
 * researcher received for their ith paper and citations is sorted in ascending order,
 * return the researcher's h-index.
 *
 * According to the definition of h-index on Wikipedia: The h-index is defined as the
 * maximum value of h such that the given researcher has published at least h papers
 * that have each been cited at least h times.
 *
 * You must write an algorithm that runs in logarithmic time.
 */

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let start = 0;

  for (let end = citations.length - 1; start <= end;) {
    const middle = Math.floor((start + end) / 2);
    if (citations.length - middle - 1 < citations[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return citations.length - start;
};
