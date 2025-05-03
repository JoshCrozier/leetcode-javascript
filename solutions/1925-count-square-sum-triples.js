/**
 * 1925. Count Square Sum Triples
 * https://leetcode.com/problems/count-square-sum-triples/
 * Difficulty: Easy
 *
 * A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.
 *
 * Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
  let result = 0;

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const sum = a * a + b * b;
      const c = Math.sqrt(sum);
      if (c <= n && Number.isInteger(c)) {
        result++;
      }
    }
  }

  return result;
};
