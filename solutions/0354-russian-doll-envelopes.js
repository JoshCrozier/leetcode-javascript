/**
 * 354. Russian Doll Envelopes
 * https://leetcode.com/problems/russian-doll-envelopes/
 * Difficulty: Hard
 *
 * You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents
 * the width and the height of an envelope.
 *
 * One envelope can fit into another if and only if both the width and height of one envelope
 * are greater than the other envelope's width and height.
 *
 * Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).
 *
 * Note: You cannot rotate an envelope.
 */

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  const result = [];

  envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
  envelopes.forEach(([_, h]) => {
    let left = 0;
    let right = result.length;
    while (left < right) {
      const middle = Math.floor((left + right) / 2);
      if (result[middle] >= h) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }
    if (left === result.length) {
      result.push(h);
    } else {
      result[left] = h;
    }
  });

  return result.length;
};
