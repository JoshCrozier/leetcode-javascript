/**
 * 278. First Bad Version
 * https://leetcode.com/problems/first-bad-version/
 * Difficulty: Medium
 *
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check. Since
 * each version is developed based on the previous version, all the versions after
 * a bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad
 * one, which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which returns whether version is
 * bad. Implement a function to find the first bad version. You should minimize the
 * number of calls to the API.
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return n => {
    let left = 1;
    let right = n;

    while (left <= right) {
      const pivot = Math.floor((right + left) / 2);
      if (isBadVersion(pivot)) {
        right = pivot - 1;
      } else {
        left = pivot + 1;
      }
    }

    return left;
  };
};
