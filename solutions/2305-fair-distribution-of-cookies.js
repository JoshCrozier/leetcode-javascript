/**
 * 2305. Fair Distribution of Cookies
 * https://leetcode.com/problems/fair-distribution-of-cookies/
 * Difficulty: Medium
 *
 * You are given an integer array cookies, where cookies[i] denotes the number of cookies in the
 * ith bag. You are also given an integer k that denotes the number of children to distribute
 * all the bags of cookies to. All the cookies in the same bag must go to the same child and
 * cannot be split up.
 *
 * The unfairness of a distribution is defined as the maximum total cookies obtained by a single
 * child in the distribution.
 *
 * Return the minimum unfairness of all distributions.
 */

/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
  const distribution = new Array(k).fill(0);
  let result = Infinity;

  distribute(0);

  return result;

  function distribute(index) {
    if (index === cookies.length) {
      result = Math.min(result, Math.max(...distribution));
      return;
    }

    for (let i = 0; i < k; i++) {
      distribution[i] += cookies[index];
      if (distribution[i] < result) {
        distribute(index + 1);
      }
      distribution[i] -= cookies[index];

      if (distribution[i] === 0) break;
    }
  }
};
