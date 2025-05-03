/**
 * 1904. The Number of Full Rounds You Have Played
 * https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/
 * Difficulty: Medium
 *
 * You are participating in an online chess tournament. There is a chess round that starts
 * every 15 minutes. The first round of the day starts at 00:00, and after every 15 minutes,
 * a new round starts.
 * - For example, the second round starts at 00:15, the fourth round starts at 00:45, and the
 *   seventh round starts at 01:30.
 *
 * You are given two strings loginTime and logoutTime where:
 * - loginTime is the time you will login to the game, and
 * - logoutTime is the time you will logout from the game.
 *
 * If logoutTime is earlier than loginTime, this means you have played from loginTime to midnight
 * and from midnight to logoutTime.
 *
 * Return the number of full chess rounds you have played in the tournament.
 *
 * Note: All the given times follow the 24-hour clock. That means the first round of the day starts
 * at 00:00 and the last round of the day starts at 23:45.
 */

/**
 * @param {string} loginTime
 * @param {string} logoutTime
 * @return {number}
 */
var numberOfRounds = function(loginTime, logoutTime) {
  let start = toMinutes(loginTime);
  let end = toMinutes(logoutTime);

  if (end < start) {
    end += 24 * 60;
  }

  start = Math.ceil(start / 15);
  end = Math.floor(end / 15);

  return Math.max(0, end - start);

  function toMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
};
