/**
 * 2167. Minimum Time to Remove All Cars Containing Illegal Goods
 * https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/
 * Difficulty: Hard
 *
 * You are given a 0-indexed binary string s which represents a sequence of train cars. s[i] = '0'
 * denotes that the ith car does not contain illegal goods and s[i] = '1' denotes that the ith car
 * does contain illegal goods.
 *
 * As the train conductor, you would like to get rid of all the cars containing illegal goods.
 * You can do any of the following three operations any number of times:
 * 1. Remove a train car from the left end (i.e., remove s[0]) which takes 1 unit of time.
 * 2. Remove a train car from the right end (i.e., remove s[s.length - 1]) which takes 1 unit
 *    of time.
 * 3. Remove a train car from anywhere in the sequence which takes 2 units of time.
 *
 * Return the minimum time to remove all the cars containing illegal goods.
 *
 * Note that an empty sequence of cars is considered to have no cars containing illegal goods.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumTime = function(s) {
  let leftCost = 0;
  let result = s.length;

  for (let i = 0; i < s.length; i++) {
    leftCost = Math.min(leftCost + (s[i] === '1' ? 2 : 0), i + 1);
    const rightCost = s.length - i - 1;
    result = Math.min(result, leftCost + rightCost);
  }

  return result;
};
