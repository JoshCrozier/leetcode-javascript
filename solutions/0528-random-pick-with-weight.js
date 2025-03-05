/**
 * 528. Random Pick with Weight
 * https://leetcode.com/problems/random-pick-with-weight/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of positive integers w where w[i] describes the
 * weight of the ith index.
 *
 * You need to implement the function pickIndex(), which randomly picks an index in
 * the range [0, w.length - 1] (inclusive) and returns it. The probability of picking
 * an index i is w[i] / sum(w).
 *
 * For example, if w = [1, 3], the probability of picking index 0 is 1 / (1 + 3) = 0.25
 * (i.e., 25%), and the probability of picking index 1 is 3 / (1 + 3) = 0.75 (i.e., 75%).
 */

/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.sums = [];
  let sum = 0;
  for (const weight of w) {
    sum += weight;
    this.sums.push(sum);
  }
  this.total = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  const target = Math.random() * this.total;
  let left = 0;
  let right = this.sums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (this.sums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
