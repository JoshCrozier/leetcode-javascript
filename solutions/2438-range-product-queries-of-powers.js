/**
 * 2438. Range Product Queries of Powers
 * https://leetcode.com/problems/range-product-queries-of-powers/
 * Difficulty: Medium
 *
 * Given a positive integer n, there exists a 0-indexed array called powers, composed of the
 * minimum number of powers of 2 that sum to n. The array is sorted in non-decreasing order,
 * and there is only one way to form the array.
 *
 * You are also given a 0-indexed 2D integer array queries, where queries[i] = [lefti, righti].
 * Each queries[i] represents a query where you have to find the product of all powers[j] with
 * lefti <= j <= righti.
 *
 * Return an array answers, equal in length to queries, where answers[i] is the answer to the
 * ith query. Since the answer to the ith query may be too large, each answers[i] should be
 * returned modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
  const modulo = 1e9 + 7;
  const powers = [];
  while (n > 0) {
    const power = Math.floor(Math.log2(n));
    powers.push(1 << power);
    n -= 1 << power;
  }
  powers.reverse();

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    let product = 1;
    for (let j = start; j <= end; j++) {
      product = (product * powers[j]) % modulo;
    }
    result[i] = product;
  }

  return result;
};
