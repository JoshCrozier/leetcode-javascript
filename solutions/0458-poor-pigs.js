/**
 * 458. Poor Pigs
 * https://leetcode.com/problems/poor-pigs/
 * Difficulty: Hard
 *
 * There are buckets buckets of liquid, where exactly one of the buckets is poisonous. To figure
 * out which one is poisonous, you feed some number of (poor) pigs the liquid to see whether
 * they will die or not. Unfortunately, you only have minutesToTest minutes to determine which
 * bucket is poisonous.
 *
 * You can feed the pigs according to these steps:
 * 1. Choose some live pigs to feed.
 * 2. For each pig, choose which buckets to feed it. The pig will consume all the chosen buckets
 *    simultaneously and will take no time. Each pig can feed from any number of buckets, and each
 *    bucket can be fed from by any number of pigs.
 * 3. Wait for minutesToDie minutes. You may not feed any other pigs during this time.
 * 4. After minutesToDie minutes have passed, any pigs that have been fed the poisonous bucket
 *    will die, and all others will survive.
 * 5. Repeat this process until you run out of time.
 *
 * Given buckets, minutesToDie, and minutesToTest, return the minimum number of pigs needed to
 * figure out which bucket is poisonous within the allotted time.
 */

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  const max = Math.floor(minutesToTest / minutesToDie) + 1;
  let result = 0;

  while (Math.pow(max, result) < buckets) {
    result++;
  }

  return result;
};
