/**
 * 2225. Find Players With Zero or One Losses
 * https://leetcode.com/problems/find-players-with-zero-or-one-losses/
 * Difficulty: Medium
 *
 * You are given an integer array matches where matches[i] = [winneri, loseri] indicates that
 * the player winneri defeated player loseri in a match.
 *
 * Return a list answer of size 2 where:
 * - answer[0] is a list of all players that have not lost any matches.
 * - answer[1] is a list of all players that have lost exactly one match.
 *
 * The values in the two lists should be returned in increasing order.
 *
 * Note:
 * - You should only consider the players that have played at least one match.
 * - The testcases will be generated such that no two matches will have the same outcome.
 */

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  const lossCount = new Map();

  for (const [winner, loser] of matches) {
    lossCount.set(winner, lossCount.get(winner) || 0);
    lossCount.set(loser, (lossCount.get(loser) || 0) + 1);
  }

  const noLosses = [];
  const oneLoss = [];

  for (const [player, losses] of lossCount) {
    if (losses === 0) noLosses.push(player);
    else if (losses === 1) oneLoss.push(player);
  }

  return [
    noLosses.sort((a, b) => a - b),
    oneLoss.sort((a, b) => a - b)
  ];
};
