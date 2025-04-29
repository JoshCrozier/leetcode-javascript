/**
 * 1744. Can You Eat Your Favorite Candy on Your Favorite Day?
 * https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/
 * Difficulty: Medium
 *
 * You are given a (0-indexed) array of positive integers candiesCount where candiesCount[i]
 * represents the number of candies of the ith type you have. You are also given a 2D array
 * queries where queries[i] = [favoriteTypei, favoriteDayi, dailyCapi].
 *
 * You play a game with the following rules:
 * - You start eating candies on day 0.
 * - You cannot eat any candy of type i unless you have eaten all candies of type i - 1.
 * - You must eat at least one candy per day until you have eaten all the candies.
 *
 * Construct a boolean array answer such that answer.length == queries.length and answer[i] is
 * true if you can eat a candy of type favoriteTypei on day favoriteDayi without eating more
 * than dailyCapi candies on any day, and false otherwise. Note that you can eat different
 * types of candy on the same day, provided that you follow rule 2.
 *
 * Return the constructed array answer.
 */

/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function(candiesCount, queries) {
  const prefixSums = [0];
  for (const count of candiesCount) {
    prefixSums.push(prefixSums.at(-1) + count);
  }

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [type, day, cap] = queries[i];
    const minCandies = day;
    const maxCandies = (day + 1) * cap;
    const typeStart = prefixSums[type];
    const typeEnd = prefixSums[type + 1] - 1;
    result[i] = maxCandies > typeStart && minCandies <= typeEnd;
  }

  return result;
};
