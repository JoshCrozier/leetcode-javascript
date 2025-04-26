/**
 * 1688. Count of Matches in Tournament
 * https://leetcode.com/problems/count-of-matches-in-tournament/
 * Difficulty: Easy
 *
 * You are given an integer n, the number of teams in a tournament that has strange rules:
 * - If the current number of teams is even, each team gets paired with another team. A total
 *   of n / 2 matches are played, and n / 2 teams advance to the next round.
 * - If the current number of teams is odd, one team randomly advances in the tournament, and
 *   the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams
 *   advance to the next round.
 *
 * Return the number of matches played in the tournament until a winner is decided.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  return n - 1;
};
