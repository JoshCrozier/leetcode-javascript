/**
 * 2410. Maximum Matching of Players With Trainers
 * https://leetcode.com/problems/maximum-matching-of-players-with-trainers/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array players, where players[i] represents the ability of
 * the ith player. You are also given a 0-indexed integer array trainers, where trainers[j]
 * represents the training capacity of the jth trainer.
 *
 * The ith player can match with the jth trainer if the player's ability is less than or equal
 * to the trainer's training capacity. Additionally, the ith player can be matched with at most
 * one trainer, and the jth trainer can be matched with at most one player.
 *
 * Return the maximum number of matchings between players and trainers that satisfy these
 * conditions.
 */

/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let result = 0;
  for (let j = 0; result < players.length && j < trainers.length; j++) {
    if (trainers[j] >= players[result]) {
      result++;
    }
  }

  return result;
};
