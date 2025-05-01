/**
 * 1815. Maximum Number of Groups Getting Fresh Donuts
 * https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/
 * Difficulty: Hard
 *
 * There is a donuts shop that bakes donuts in batches of batchSize. They have a rule where they
 * must serve all of the donuts of a batch before serving any donuts of the next batch. You are
 * given an integer batchSize and an integer array groups, where groups[i] denotes that there is
 * a group of groups[i] customers that will visit the shop. Each customer will get exactly one
 * donut.
 *
 * When a group visits the shop, all customers of the group must be served before serving any
 * of the following groups. A group will be happy if they all get fresh donuts. That is, the
 * first customer of the group does not receive a donut that was left over from the previous group.
 *
 * You can freely rearrange the ordering of the groups. Return the maximum possible number of
 * happy groups after rearranging the groups.
 */

/**
 * @param {number} batchSize
 * @param {number[]} groups
 * @return {number}
 */
var maxHappyGroups = function(batchSize, groups) {
  const remainders = new Array(batchSize).fill(0);
  let result = 0;

  for (const size of groups) {
    remainders[size % batchSize]++;
  }

  result += remainders[0];
  remainders[0] = 0;

  return result + findMaxHappy(remainders, 0);

  function findMaxHappy(remainders, leftover, memo = new Map()) {
    const key = remainders.join(',') + ',' + leftover;
    if (memo.has(key)) return memo.get(key);

    let maxHappy = 0;
    for (let i = 1; i < batchSize; i++) {
      if (remainders[i] === 0) continue;
      remainders[i]--;

      let current = 0;
      if (leftover === 0) current = 1;
      maxHappy = Math.max(
        maxHappy, current + findMaxHappy(remainders, (leftover + i) % batchSize, memo)
      );

      remainders[i]++;
    }

    memo.set(key, maxHappy);
    return maxHappy;
  }
};
