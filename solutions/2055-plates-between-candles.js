/**
 * 2055. Plates Between Candles
 * https://leetcode.com/problems/plates-between-candles/
 * Difficulty: Medium
 *
 * There is a long table with a line of plates and candles arranged on top of it. You are given
 * a 0-indexed string s consisting of characters '*' and '|' only, where a '*' represents a plate
 * and a '|' represents a candle.
 *
 * You are also given a 0-indexed 2D integer array queries where queries[i] = [lefti, righti]
 * denotes the substring s[lefti...righti] (inclusive). For each query, you need to find the
 * number of plates between candles that are in the substring. A plate is considered between
 * candles if there is at least one candle to its left and at least one candle to its right
 * in the substring.
 * - For example, s = "||**||**|*", and a query [3, 8] denotes the substring "*||**|". The number
 *   of plates between candles in this substring is 2, as each of the two plates has at least one
 *   candle in the substring to its left and right.
 *
 * Return an integer array answer where answer[i] is the answer to the ith query.
 */

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
  const n = s.length;
  const prefixPlates = new Array(n + 1).fill(0);
  const leftCandle = new Array(n).fill(-1);
  const rightCandle = new Array(n).fill(-1);

  for (let i = 0, candle = -1; i < n; i++) {
    prefixPlates[i + 1] = prefixPlates[i] + (s[i] === '*' ? 1 : 0);
    if (s[i] === '|') candle = i;
    leftCandle[i] = candle;
  }

  for (let i = n - 1, candle = -1; i >= 0; i--) {
    if (s[i] === '|') candle = i;
    rightCandle[i] = candle;
  }

  const result = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    const left = rightCandle[start];
    const right = leftCandle[end];
    if (left !== -1 && right !== -1 && left < right) {
      result[i] = prefixPlates[right] - prefixPlates[left];
    }
  }

  return result;
};
