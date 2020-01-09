/**
 * 985. Sum of Even Numbers After Queries
 * https://leetcode.com/problems/sum-of-even-numbers-after-queries/
 * Difficulty: Easy
 *
 * We have an array A of integers, and an array queries of queries.
 *
 * For the i-th query val = queries[i][0], index = queries[i][1],
 * we add val to A[index].  Then, the answer to the i-th query
 * is the sum of the even values of A.
 *
 * (Here, the given index = queries[i][1] is a 0-based index, and
 * each query permanently modifies the array A.)
 *
 * Return the answer to all queries. Your answer array should
 * have answer[i] as the answer to the i-th query.
 */

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  return queries.reduce((sums, query) => {
    A[query[1]] += query[0];
    return [...sums, A.reduce((sum, n) => sum + (n % 2 === 0 ? n : 0), 0)];
  }, []);
};
