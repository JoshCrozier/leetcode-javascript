/**
 * 1772. Sort Features by Popularity
 * https://leetcode.com/problems/sort-features-by-popularity/
 * Difficulty: Medium
 *
 * You are given a string array features where features[i] is a single word that represents
 * the name of a feature of the latest product you are working on. You have made a survey
 * where users have reported which features they like. You are given a string array responses,
 * where each responses[i] is a string containing space-separated words.
 *
 * The popularity of a feature is the number of responses[i] that contain the feature. You
 * want to sort the features in non-increasing order by their popularity. If two features
 * have the same popularity, order them by their original index in features. Notice that
 * one response could contain the same feature multiple times; this feature is only counted
 * once in its popularity.
 *
 * Return the features in sorted order.
 */

/**
 * @param {string[]} features
 * @param {string[]} responses
 * @return {string[]}
 */
var sortFeatures = function(features, responses) {
  const map = new Map();

  for (const feature of features) {
    map.set(feature, 0);
  }

  for (const response of responses) {
    const uniqueWords = new Set(response.split(' '));
    for (const word of uniqueWords) {
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      }
    }
  }

  return features
    .map((feature, index) => ({ feature, popularity: map.get(feature), index }))
    .sort((a, b) => {
      if (a.popularity !== b.popularity) {
        return b.popularity - a.popularity;
      }
      return a.index - b.index;
    })
    .map(item => item.feature);
};
