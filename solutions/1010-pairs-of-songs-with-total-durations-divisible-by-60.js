/**
 * 1010. Pairs of Songs With Total Durations Divisible by 60
 * https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
 * Difficulty: Medium
 *
 * You are given a list of songs where the ith song has a duration of time[i] seconds.
 *
 * Return the number of pairs of songs for which their total duration in seconds is
 * divisible by 60. Formally, we want the number of indices i, j such that i < j with
 * (time[i] + time[j]) % 60 == 0.
 */

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  const mods = new Array(60).fill(0);
  return time.reduce((sum, t) => {
    sum += mods[(60 - t % 60) % 60];
    mods[t % 60]++;
    return sum;
  }, 0);
};
