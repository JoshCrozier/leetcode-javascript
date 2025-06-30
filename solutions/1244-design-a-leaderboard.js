/**
 * 1244. Design A Leaderboard
 * https://leetcode.com/problems/design-a-leaderboard/
 * Difficulty: Medium
 *
 * Design a Leaderboard class, which has 3 functions:
 * - addScore(playerId, score): Update the leaderboard by adding score to the given player's
 *   score. If there is no player with such id in the leaderboard, add him to the leaderboard
 *   with the given score.
 * - top(K): Return the score sum of the top K players.
 * - reset(playerId): Reset the score of the player with the given id to 0 (in other words
 *   erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard
 *   before calling this function.
 *
 * Initially, the leaderboard is empty.
 */


var Leaderboard = function() {
  this.scores = new Map();
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
  this.scores.set(playerId, (this.scores.get(playerId) || 0) + score);
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
  const sortedScores = Array.from(this.scores.values()).sort((a, b) => b - a);
  return sortedScores.slice(0, K).reduce((sum, score) => sum + score, 0);
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
  this.scores.delete(playerId);
};
