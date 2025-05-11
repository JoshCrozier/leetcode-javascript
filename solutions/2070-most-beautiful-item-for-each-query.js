/**
 * 2070. Most Beautiful Item for Each Query
 * https://leetcode.com/problems/most-beautiful-item-for-each-query/
 * Difficulty: Medium
 *
 * You are given a 2D integer array items where items[i] = [pricei, beautyi] denotes the price and
 * beauty of an item respectively.
 *
 * You are also given a 0-indexed integer array queries. For each queries[j], you want to determine
 * the maximum beauty of an item whose price is less than or equal to queries[j]. If no such item
 * exists, then the answer to this query is 0.
 *
 * Return an array answer of the same length as queries where answer[j] is the answer to the jth
 * query.
 */

/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
  items.sort((a, b) => a[0] - b[0]);
  const maxBeauty = [];
  let currentMax = 0;

  for (const [, beauty] of items) {
    currentMax = Math.max(currentMax, beauty);
    maxBeauty.push(currentMax);
  }

  const result = new Array(queries.length).fill(0);

  for (let i = 0; i < queries.length; i++) {
    const price = queries[i];
    let left = 0;
    let right = items.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (items[mid][0] <= price) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (right >= 0) {
      result[i] = maxBeauty[right];
    }
  }

  return result;
};
