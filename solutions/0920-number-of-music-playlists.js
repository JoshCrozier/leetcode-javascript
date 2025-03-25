/**
 * 920. Number of Music Playlists
 * https://leetcode.com/problems/number-of-music-playlists/
 * Difficulty: Hard
 *
 * Your music player contains n different songs. You want to listen to goal songs (not necessarily
 * different) during your trip. To avoid boredom, you will create a playlist so that:
 * - Every song is played at least once.
 * - A song can only be played again only if k other songs have been played.
 *
 * Given n, goal, and k, return the number of possible playlists that you can create. Since the
 * answer can be very large, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
  const MOD = 1e9 + 7;
  const dp = new Array(goal + 1).fill().map(() => new Array(n + 1).fill(0));
  dp[0][0] = 1;

  for (let songs = 1; songs <= goal; songs++) {
    for (let uniques = 1; uniques <= Math.min(songs, n); uniques++) {
      dp[songs][uniques] = dp[songs - 1][uniques - 1] * (n - (uniques - 1));
      if (uniques > k) {
        dp[songs][uniques] += dp[songs - 1][uniques] * (uniques - k);
      }
      dp[songs][uniques] %= MOD;
    }
  }

  return dp[goal][n];
};
