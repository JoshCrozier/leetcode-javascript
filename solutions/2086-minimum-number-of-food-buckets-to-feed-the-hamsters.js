/**
 * 2086. Minimum Number of Food Buckets to Feed the Hamsters
 * https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string hamsters where hamsters[i] is either:
 * - 'H' indicating that there is a hamster at index i, or
 * - '.' indicating that index i is empty.
 *
 * You will add some number of food buckets at the empty indices in order to feed the hamsters.
 * A hamster can be fed if there is at least one food bucket to its left or to its right. More
 * formally, a hamster at index i can be fed if you place a food bucket at index i - 1 and/or
 * at index i + 1.
 *
 * Return the minimum number of food buckets you should place at empty indices to feed all the
 * hamsters or -1 if it is impossible to feed all of them.
 */

/**
 * @param {string} hamsters
 * @return {number}
 */
var minimumBuckets = function(hamsters) {
  const n = hamsters.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (hamsters[i] === 'H') {
      if (i > 0 && hamsters[i - 1] === 'B') continue;
      if (i < n - 1 && hamsters[i + 1] === '.') {
        result++;
        hamsters = hamsters.slice(0, i + 1) + 'B' + hamsters.slice(i + 2);
      } else if (i > 0 && hamsters[i - 1] === '.') {
        result++;
        hamsters = hamsters.slice(0, i - 1) + 'B' + hamsters.slice(i);
      } else {
        return -1;
      }
    }
  }

  return result;
};
