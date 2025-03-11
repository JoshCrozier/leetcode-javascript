/**
 * 710. Random Pick with Blacklist
 * https://leetcode.com/problems/random-pick-with-blacklist/
 * Difficulty: Hard
 *
 * You are given an integer n and an array of unique integers blacklist. Design an algorithm to
 * pick a random integer in the range [0, n - 1] that is not in blacklist. Any integer that is
 * in the mentioned range and not in blacklist should be equally likely to be returned.
 *
 * Optimize your algorithm such that it minimizes the number of calls to the built-in random
 * function of your language.
 *
 * Implement the Solution class:
 * - Solution(int n, int[] blacklist) Initializes the object with the integer n and the
 *   blacklisted integers blacklist.
 * - int pick() Returns a random integer in the range [0, n - 1] and not in blacklist.
 */

/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function(n, blacklist) {
  this.size = n - blacklist.length;
  this.mapping = new Map();
  blacklist = new Set(blacklist);

  let last = n - 1;
  for (const b of blacklist) {
    if (b < this.size) {
      while (blacklist.has(last)) last--;
      this.mapping.set(b, last--);
    }
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  const index = Math.floor(Math.random() * this.size);
  return this.mapping.get(index) ?? index;
};
