/**
 * 2621. Sleep
 * https://leetcode.com/problems/sleep/
 * Difficulty: Easy
 *
 * Given a positive integer `ms`, write an asynchronous function that
 * sleeps for `ms` milliseconds. It can resolve any value.
 */

/**
 * @param {number} ms
 * @return {Promise}
 */
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
